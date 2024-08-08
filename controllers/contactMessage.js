//Incluir as bibliotecas
//Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");
//Incluir o arquivo que possui a conexão com BD
const db = require('../db/models');
//Chamar a função express
const router = express.Router();

// Endereço para acessar através da aplicação externa: http://localhost:8080/contact-menssage
/*
// A aplicação externa deve indicar que está enviado os dados em formato de objeto: Content-Type: application/json

// Dados em formato de objeto
{
    "name": "Wellington",
    "email": "wellington@wellington.com.br",
    "subject": "Assunto",
    "content": "Conteúdo"
}
*/

//Criar a rota cadastrar método post
router.post("/", async (req, res) => {
    //Receber os dados enviados no corpo da requisição
    var data = req.body;

    //Salvar no BD
    await db.ContactsMsgs.create(data)
    .then((dataContactsMsgs) => {
        return res.json({
            error: false,
            message: "Mensagem cadastrada com sucesso!",
            dataContactsMsgs
        });
    }).catch(() => {
        return res.json({
            error: false,
            message: "Mensagem não cadastrada com sucesso!",
        });

    });
});

//Exportar a instrução que está dentro da constante router
module.exports = router;