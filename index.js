// arquivo principal 

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database") ;
const Pergunta = require("./database/Pergunta"); //import database
const Resposta = require("./database/Resposta");

// database me conectar 
connection.authenticate().then(()=>{
    console.log('conexão feita com o banco de dados!')
}).catch((msgErro) =>{
    console.log('msgErro')
});


// estou dizendo para express usar ejs como ciew engine
app.set('view engine','ejs')
// definir arq estaticos
app.use(express.static('public'));
//bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//rotas /pag principal listar
app.get("/",(req,res) =>{
    // pesquisa crua e ordena por id descre
 Pergunta.findAll({raw:true,order:[
     ['id','DESC']
    ]}).then(perguntas=>{
    // console.log(perguntas);
     res.render("index",{
         perguntas:perguntas
    });
 });
});

app.get("/perguntar",(req,res)=>{
    res.render("perguntar")
})

//savar
app.post("/salvarpergunta",(req,res)=>{
    
    var titulo    = req.body.titulo;
    var descricao = req.body.descricao;
     // insert
    Pergunta.create({
      titulo: titulo,
      descricao: descricao
     }).then(() => {
      res.redirect("/");     //redireciona p form principal
    });
});
/*
///rota pergunta
   //rota+ :id param no express
app.get("/pergunta/:id",(req,res) => {
   var id = req.params.id;
   Pergunta.findOne({
           //campo:valor
       Where:{id:id}
   }).then(pergunta =>{
     if(pergunta != undefined){ // pergunta encontrada
          res.render("pergunta",{
              pergunta:pergunta
          });
          
     }else{ // n encontrada
        res.redirect("/");
     }
   })
});
 */


app.get("/pergunta/:id",(req ,res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id},
    }).then(pergunta => {
        if(pergunta != undefined){ // Pergunta encontrada
            
            Resposta.findAll({
                where:{perguntaId:pergunta.id},
                order:[
                     ['id','DESC'] 
                    ]
            }).then(respostas =>{
                res.render("pergunta",{
                    pergunta:pergunta,
                    respostas: respostas
                });
            });
               
         }
        else{ // Não encontrada
            res.redirect("/");
        }
    });
});

app.post("/responder",(req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/"+perguntaId);
    });
});




app.listen(8080,()=>{
    console.log("App rodando!")
});



// busca um dado no banco com uma condição(com where)