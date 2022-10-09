const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const stories = require("./src/stories/stories.json")

app.get("/stories", (req,res) => {
    return res.json(stories)
})

app.get("/stories/1", (req,res) => {
    return res.json(stories["1. A Criação"])
})

app.get("/stories/2", (req,res) => {
    return res.json(stories["2. O Pecado Entra no Mundo"])
})

app.get("/stories/3", (req,res) => {
    return res.json(stories["3. O Dilúvio"])
})

app.get("/stories/4", (req,res) => {
    return res.json(stories["4. O Pacto de Deus com Abraão"])
})

app.get("/stories/5", (req,res) => {
    return res.json(stories["5. O Filho da Promessa"])
})

app.get("/stories/6", (req,res) => {
    return res.json(stories["6. A Providência de Deus para Isaque"])
})

app.get("/stories/7", (req,res) => {
    return res.json(stories["7. Deus Abençoa Jacó"])
})

app.get("/stories/8", (req,res) => {
    return res.json(stories["8. Deus salva José e sua Família"])
})

app.get("/stories/9", (req,res) => {
    return res.json(stories["9. Deus chama Moisés"])
})

app.get("/stories/10", (req,res) => {
    return res.json(stories["10. As Dez Pragas"])
})

app.get("/stories/11", (req,res) => {
    return res.json(stories["11. A Páscoa"])
})

app.get("/stories/12", (req,res) => {
    return res.json(stories["12. O Êxodo"])
})

app.get("/stories/13", (req,res) => {
    return res.json(stories["13. O Pacto de Deus com Israel"])
})

app.get("/stories/14", (req,res) => {
    return res.json(stories["14. Peregrinando no Deserto"])
})

app.get("/stories/15", (req,res) => {
    return res.json(stories["15. A Terra Prometida"])
})

app.get("/stories/16", (req,res) => {
    return res.json(stories["16. Os Libertadores"])
})

app.get("/stories/17", (req,res) => {
    return res.json(stories["17. O Pacto de Deus com Davi"])
})

app.get("/stories/18", (req,res) => {
    return res.json(stories["18. O Reino Dividido"])
})

app.get("/stories/19", (req,res) => {
    return res.json(stories["19. Os Profetas"])
})

app.get("/stories/20", (req,res) => {
    return res.json(stories["20. O Exílio e o Retorno"])
})

app.get("/stories/21", (req,res) => {
    return res.json(stories["21. Deus Promete o Messias"])
})

app.get("/stories/22", (req,res) => {
    return res.json(stories["22. O Nascimento de João"])
})

app.get("/stories/23", (req,res) => {
    return res.json(stories["23. O Nascimento de Jesus"])
})

app.get("/stories/24", (req,res) => {
    return res.json(stories["24. João Batiza Jesus"])
})

app.get("/stories/25", (req,res) => {
    return res.json(stories["25. Satanás Tenta Jesus"])
})

app.get("/stories/26", (req,res) => {
    return res.json(stories["26. Jesus Inicia o Seu Ministério"])
})

app.get("/stories/27", (req,res) => {
    return res.json(stories["27. A História do Bom Samaritano"])
})

app.get("/stories/28", (req,res) => {
    return res.json(stories["28. O Jovem Rico"])
})

app.get("/stories/29", (req,res) => {
    return res.json(stories["29. A História do Servo sem Compaixão"])
})

app.get("/stories/30", (req,res) => {
    return res.json(stories["30. Jesus Alimenta Cinco Mil Pessoas"])
})

app.get("/stories/31", (req,res) => {
    return res.json(stories["31. Jesus Anda Sobre as Águas"])
})

app.get("/stories/32", (req,res) => {
    return res.json(stories["32. Jesus Cura Um Endemoninhado e Uma Mulher Enferma"])
})

app.get("/stories/33", (req,res) => {
    return res.json(stories["33. A História do Semeador"])
})

app.get("/stories/34", (req,res) => {
    return res.json(stories["34. Jesus Ensina Outras Histórias"])
})

app.get("/stories/35", (req,res) => {
    return res.json(stories["35. A História do Pai Compassivo"])
})

app.get("/stories/36", (req,res) => {
    return res.json(stories["36. A Transfiguração"])
})

app.get("/stories/37", (req,res) => {
    return res.json(stories["37. Jesus Ressuscita Lázaro"])
})

app.get("/stories/38", (req,res) => {
    return res.json(stories["38. Jesus é Traído"])
})

app.get("/stories/39", (req,res) => {
    return res.json(stories["39. Jesus é Julgado"])
})

app.get("/stories/40", (req,res) => {
    return res.json(stories["40. Jesus é Crucificado"])
})

app.get("/stories/41", (req,res) => {
    return res.json(stories["41. Jesus Ressuscita dos Mortos"])
})

app.get("/stories/42", (req,res) => {
    return res.json(stories["42. Jesus Retorna ao Céu"])
})

app.get("/stories/43", (req,res) => {
    return res.json(stories["43. O Início da Igreja"])
})

app.get("/stories/44", (req,res) => {
    return res.json(stories["44. A Cura de Um Mendigo"])
})

app.get("/stories/45", (req,res) => {
    return res.json(stories["45. Felipe e o Oficial Etíope"])
})

app.get("/stories/46", (req,res) => {
    return res.json(stories["46. A Conversão de Paulo"])
})

app.get("/stories/47", (req,res) => {
    return res.json(stories["47. Paulo e Silas em Filipos"])
})

app.get("/stories/48", (req,res) => {
    return res.json(stories["48. Jesus é o Messias Prometido"])
})

app.get("/stories/49", (req,res) => {
    return res.json(stories["49. O Novo Pacto com Deus"])
})

app.get("/stories/50", (req,res) => {
    return res.json(stories["50. A Volta de Jesus"])
})


app.listen(port, () => {
    console.log("Server ON")
})