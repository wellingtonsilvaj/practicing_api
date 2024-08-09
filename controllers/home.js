//Incluir as bibliotecas
//Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");

//Incluir o arquivo que possui a conexão com BD
const db = require('./../db/models');
//Chamar a função express
const router = express.Router();


//Criar a rota visualizar método get
//Endereço para acessar a api atraves da aplicação externa: http://localhost:8080/home


router.get("/", async (req, res) => {

    //Recuperar o registro do BD
    const homesTops = await db.HomesTops.findOne({

        //Indicar quais colunas recuperar
        attributes: ['titleOneTop', 'titleTwoTop', 'titleThreeTop', 'linkBtnTop', 'textBtnTop','imageTop'],
        //where:{id:1}
    });

        //Recuperar o registro do BD
        const homesServices = await db.HomesServices.findOne({

            //Indicar quais colunas recuperar
            attributes: ['servTitle', 'servIconOne', 'servTitleOne', 'servDescOne', 'servIconTwo','servTitleTwo','servDescTwo','servIconThree','servTitleThree','servDescThree'],
            //where:{id:2}
        });

        //Recuperar o registro do BD
        const homesPremiums = await db.HomesPremiums.findOne({

            //Indicar quais colunas recuperar
            attributes: ['premTitle', 'premSubtitle', 'premDesc', 'premBtn_text', 'premBtn_link','premImage'],
            //where:{id:2}
        });


    //Acessa o IF se encontrar o registro no BD
if ((homesTops) && (homesServices) && (homesPremiums)){

        //Criar o caminho da imagem do topo
        homesTops.dataValues['imageTop'] = process.env.URL_ADM + "/images/home_top/" + homesTops.dataValues['imageTop']
        
        //Criar o caminho da imagem do serviço premium
        homesPremiums.dataValues['premImage'] = process.env.URL_ADM + "/images/home_prem/" + homesPremiums.dataValues['premImage']

        return res.json({
        error:false,
        homesTops,
        homesServices,
        homesPremiums

    });
}else{
    return res.status(400).json({
        error: true,
        message:"Erro: Não encontrado conteudo da página home do site"
    });
}
});

//Exportar a instrução que está dentro da constante router
module.exports = router;