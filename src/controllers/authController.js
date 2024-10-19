const https = require('follow-redirects').https;
const crypto = require('crypto');
require('dotenv').config();
const request = require('request');
const jwt = require('jsonwebtoken'); // Adicionando JWT
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY; // Chave secreta para JWT
const BaserowToken = process.env.BASEROW_API_TOKEN;
const BaserowAuthTableId = process.env.BASEROW_AUTH_TABLE_ID;
const baserowApiUrl = process.env.BASEROW_API_URL;

// Função de verificação de email já existente no Baserow
function checkIfEmailExists(email) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      hostname: 'api.baserow.io',
      path: `/api/database/rows/table/${BaserowAuthTableId}/?search=${email}&user_field_names=true`,
      headers: {
        'Authorization': `Token ${BaserowToken}`
      },
      maxRedirects: 20
    };

    const request = https.request(options, (response) => {
      let chunks = [];

      response.on("data", (chunk) => {
        chunks.push(chunk);
      });

      response.on("end", () => {
        const body = Buffer.concat(chunks);
        const result = JSON.parse(body.toString());

        if (result.count > 0) {
          resolve(true); // Email já existe
        } else {
          resolve(false); // Email não existe
        }
      });
    });

    request.on("error", (error) => {
      reject(error);
    });

    request.end();
  });
}

// Função de autenticação (login)
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Validações iniciais
  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }

  // Busca o usuário no Baserow
  const options = {
    method: 'GET',
    hostname: 'api.baserow.io',
    path: `/api/database/rows/table/${BaserowAuthTableId}/?search=${email}&user_field_names=true`,
    headers: {
      'Authorization': `Token ${BaserowToken}`
    },
    maxRedirects: 20
  };

  const request = https.request(options, (response) => {
    let chunks = [];

    response.on("data", (chunk) => {
      chunks.push(chunk);
    });

    response.on("end", () => {
      const body = Buffer.concat(chunks);
      const user = JSON.parse(body.toString());

      if (!user.count) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
      }

      const userData = user.results[0]; // Dados do primeiro usuário encontrado

      // Verifica a senha
      if (!passTest(password, userData.password, userData.salt)) {
        return res.status(400).json({ error: 'Senha incorreta' });
      }

      // Geração do token JWT
      const token = jwt.sign({ id: userData.id, email: userData.email }, SECRET_KEY, { expiresIn: '1h' });

      // Retorna o token junto com os dados do usuário
      return res.json({
        message: 'Login bem-sucedido',
        token, // O token é retornado
        user: {
          id: userData.id,
          email: userData.email
        }
      });
    });
  });

  request.on("error", (error) => {
    console.error(error);
    res.status(500).json({ error: 'Erro na comunicação com o Baserow' });
  });

  request.end();
};

// Função de verificação de senha
function passTest(password, hash, salt) {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('base64') === hash;
}

// Função de registro de usuário
exports.register = async (req, res) => {
  const { email, password } = req.body;

  // Validações iniciais
  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }

  try {
    // Verifica se o email já existe no Baserow
    const emailExists = await checkIfEmailExists(email);
    if (emailExists) {
      return res.status(400).json({ error: 'Este email já está registrado' });
    }

    // Gera um salt e uma hash para a senha
    const salt = crypto.randomBytes(16).toString('base64');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('base64');

    var options = {
      method: 'POST',
      url: `${baserowApiUrl}/api/database/rows/table/${BaserowAuthTableId}/?user_field_names=true`,
      headers: {
        'Authorization': `Token ${BaserowToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": hash,
        "salt": salt
      })
    };

    // Faz o cadastro do novo usuário
    request(options, function (error, response) {
      if (error) {
        console.error('Erro ao criar usuário:', error);
        return res.status(500).json({ error: 'Erro ao criar usuário' });
      }
      console.log('Usuário criado:', response.body); // Debug: Mostra a resposta do cadastro
      res.status(201).json({ message: 'Usuário criado com sucesso', data: JSON.parse(response.body) });
    });
  } catch (error) {
    console.error('Erro durante o registro:', error);
    res.status(500).json({ error: 'Erro ao verificar o email no Baserow' });
  }
};
