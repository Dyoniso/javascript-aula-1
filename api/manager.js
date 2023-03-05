//IMPORTA O MODULO OPENAI
const { Configuration, OpenAIApi } = require("openai")

//IMPORTA O OBJETO APP
const { app } = require('../app')

//VARIAVEL CONTENDO TOKEN DO OPENAI, USADA PARA PERMITIR REQUISIÇÃO DA API
const TOKEN = process.env.TOKEN

//SCRIPT DE CONFIGURAÇÃO DA OPENAI
const configuration = new Configuration({
    apiKey: TOKEN,
});
const openai = new OpenAIApi(configuration);

//ROTEAMENTO PARA HABILITAR O METODO GET NO CAMINHO localhost:8080/openai
app.get('/openai', async(req, res) => {
    let content = req.query.content
    let data = await generateData(content)

    return res.send(data).end()
})

//FUNÇÃO QUE GERA DADOS DA OPENAI COM BASE NO ATRIBUTO
async function generateData(content) {
    return await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: content,
        max_tokens: 2048,
        n: 1,
        temperature: 0.5,
        presence_penalty: 2
    })
    .then((res) => res.data.choices)
    .catch((error) => error.response.data)
}