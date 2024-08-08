//Incluir as bibliotecas
//Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");

//Incluir o arquivo que possui a conexão com BD
const db = require('../db/models');
//Chamar a função express
const router = express.Router();


//Criar a rota visualizar método get
//Endereço para acessar a api atraves da aplicação externa: http://localhost:8080/contents-contacts


router.get("/", async (req, res) => {


    //Recuperar o registro do BD
    const contentsContacts = await db.ContentsContacts.findOne({

        //Indicar quais colunas recuperar
        attributes: ['titleContact', 'descContact', 'iconCompany', 'titleCompany', 'desCompany','iconAddress','titleAddress','descAddress','iconEmail','titleEmail','descEmail','titleForm'],
        //where:{id:100}
    });


        //Acessa o IF se encontrar o registro no BD
    if (contentsContacts){
        return res.json({
            error:false,
            contentsContacts

        });
    }else{
        return res.status(400).json({
            error: true,
            message:"Erro: Não encontrado conteudo da página de contato!"
        });
    }
});

//Exportar a instrução que está dentro da constante router
module.exports = router;