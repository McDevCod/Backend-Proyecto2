const express = require("express")

const router = express.Router()

router.get("/",(request,response)=>{
    try{
        return response.render("index",{
            Title: "Página index"
        })
    }
    catch{
        console.log("No es posible cargar la página")
    }
})

module.exports=router