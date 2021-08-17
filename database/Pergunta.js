const Sequelize = require("sequelize"); // import Sequelize 
const connection = require("./database"); // import conexao bd 

//definir o model ou seja vai criar a tabela no banco 
const Pergunta = connection.define('perguntas',{ //define nome da tabela
    titulo:{                    // nome
        type: Sequelize.STRING, //tipo string
        allowNull: false       //impede o campo reb valor null
    },
    descricao:{
        type: Sequelize.TEXT,// text  para texto longo 
        allowNull: false
    }
});

//sincronizar com Bd e criar a tab 
Pergunta.sync({force:false}).then(()=>{});
module.exports = Pergunta;