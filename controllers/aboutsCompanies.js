//Incluir as bibliotecas
//Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");

//Incluir o arquivo que possui a conexão com BD
const db = require('../db/models');
//Chamar a função express
const router = express.Router();


//Criar a rota visualizar método get
//Endereço para acessar a api atraves da aplicação externa: http://localhost:8080/about-companies
router.get("/", async (req, res) => {

    //Recuperar os registro do BD
    const aboutsCompanies = await db.AboutsCompanies.findAll({

        //Indicar quais colunas recuperar
        attributes: ['id', 'title', 'description', 'image', 'situationAboutId'],

        //Buscar dados na tabela secundaria
        include:[{
            model: db.SituationsAbouts,
            attributes:['nameSituation']
        }],

        //Ordenar os registros pela coluna ID de forma decrescente
        order:[['id','ASC']],
        where:{ situationAboutId:1 }
    });


    //Acessa o IF se encontrar o registro no BD
if (aboutsCompanies){
    return res.json({
        error:false,
        aboutsCompanies

    });
}else{
    return res.status(400).json({
        error: true,
        message:"Erro: Nenhum registro sobre enpresa foi encontrado!"
    });
}
});

//Exportar a instrução que está dentro da constante router
module.exports = router;