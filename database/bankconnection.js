const Sequelize = require("sequelize");
const data = require("./data");
const Connection = new Sequelize(data.bank,data.user, data.password, data.configuration);

(async ()=>{
    try{

        await Connection.authenticate();
        console.log("Banco de dados conectado!");
    
    }catch(erro){
        console.log("Banco de dados não conectado!");
    };
    
})();

module.exports = Connection