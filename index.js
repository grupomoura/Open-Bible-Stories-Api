const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const logger = require('./src/logger'); // Importa o logger
const authRoutes = require("./src/routes/authRoutes"); // Importando as rotas de autenticação
const authMiddleware = require("./src/middleware/authMiddleware"); // Importar o middleware
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const YAML = require('yamljs');

// Carregar o arquivo YAML gerado pela conversão
const churchApp_swagger_api = YAML.load('src/config/churchApp_swagger_api.yaml');

// Usar o Swagger UI para servir a documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(churchApp_swagger_api));

app.use(express.json()); // Middleware para parsing de JSON
app.use(express.urlencoded({ extended: true })); // Para parsing de dados de formulário

app.use(cors()); // Permitir acesso CORS para todas as origens
app.use("/auth", authRoutes);

// Middleware de logs, mas agora logando após a resposta
app.use((req, res, next) => {
    res.on('finish', () => {
        if (res.statusCode >= 400) {
            logger.error(`Requisição: ${req.method} ${req.url} - Status: ${res.statusCode}`);
        } else {
            logger.info(`Requisição: ${req.method} ${req.url} - Status: ${res.statusCode}`);
        }
    });
    next();
});

// API Welcome
app.get("/", (req, res) => {
    return res.json({
        message: "Olá, bem-vindo! Você está em um local seguro.",
        description: "Esta é a API da nossa aplicação ChurchApp, onde você pode acessar diversos recursos.",
        documentation: [
            {
                title: "Documentação API",
                link: `${req.protocol}://${req.get('host')}/api-docs`
            }
        ]
    });
});

// Aplicar o middleware de autenticação em todas as rotas abaixo
app.use(authMiddleware);

// Rotas públicas
const cartoonStoriesRoutes = require("./src/routes/cartoonStories");
const videosOverviewRoutes = require("./src/routes/videosOverview");
// Importação das rotas
const sinopsesOverviewNewTestmentRoutes = require("./src/routes/sinopsesOverviewNewTestment");
const sinopsesOverviewOldTestmentRoutes = require("./src/routes/sinopsesOverviewOldTestment");
const sinopsesOverviewRoutes = require("./src/routes/sinopsesOverview");
// Importação de planos de leitura
const readingPlansRoutes = require("./src/routes/readingPlans");

app.use("/cartoonStories", cartoonStoriesRoutes);
app.use("/videosOverview", videosOverviewRoutes);
app.use("/sinopsesOverviewNewTestment", sinopsesOverviewNewTestmentRoutes);
app.use("/sinopsesOverviewOldTestment", sinopsesOverviewOldTestmentRoutes);
app.use("/sinopsesOverview", sinopsesOverviewRoutes);
app.use("/readingPlans", readingPlansRoutes);

// Tratamento de erros gerais (500 e outros)
app.use((err, req, res, next) => {
    logger.error(`Erro: ${err.message} - Requisição: ${req.method} ${req.url} - Status: 500`);
    res.status(500).json({ error: 'Erro interno do servidor' });
});

app.listen(port, () => {
  logger.info(`Servidor rodando na porta ${port}`);
  console.log(`Documentação disponível em: http://localhost:${port}/api-docs`);
});