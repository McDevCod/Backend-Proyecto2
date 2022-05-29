//---Importando Mysql----//
const { promise } = require("bcrypt/promises")
const mysql=require("mysql2")
const{dbhost,dbport,dbuser,dbpassword,dbname}=require("../config")

//--Estableciendo función de conexión con la BD----//
const connection = mysql.createConnection({
    host:dbhost, //localhost
    port:dbport,
    user:dbuser,
    password: dbpassword,
    database:dbname
})


//----Metodo query basado en promesa---------//
function query(sql,data){
    const miPromesa = new Promise(function (resolve,reject){
        connection.query(sql,data,function(error,result,fields){
            if(error!=null){
                console.log(error)
    
                return reject({
                    error:true,
                    message:error.sqlMessage
                })
            }else{
                return resolve(result)
            }
        })
    })

    return miPromesa
    
}



//------Exportando objeto de conexión de mysql2-----//
module.exports={
    connection,
    query
}