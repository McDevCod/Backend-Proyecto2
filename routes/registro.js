const path = require("path")

const express = require("express")

const response = require("express/lib/response")
const router = express.Router()

const app = express()


app.get("/registro",(request,response)=>{
    try{
        return response.sendFile(path.join(dirname,"..","Views","registro.html"))
    }
    catch{
        console.log("No es posible cargar la página")
    }
})


module.exports=router