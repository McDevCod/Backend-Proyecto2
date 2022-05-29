const express = require("express")

const router = express.Router()

router.get("/repositorio",(request,response)=>{
    try{
        return response.render("test",{
            title: "Página repositorio",
            pagina: "/repositorio page"
        })
    }
    catch{
        console.log("No es posible cargar la página")
    }
})

module.exports=router