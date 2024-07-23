//Incluir as bibliotecas
//Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");
//Chamar a função express
const router = express.Router();


//Criar a rota visualizar método get
router.get("/", (req, res) => {
    res.send("pag inicial!");
});

//Exportar a instrução que está dentro da constante router
module.exports = router;