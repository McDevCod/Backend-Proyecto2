const express = require("express")

const router = express.Router()

router.get("/soporte",(request,response)=>{
    try{
        return response.render("test",{
            title: "Página soporte",
            pagina: "/soporte page"
        })
    }
    catch{
        console.log("No es posible cargar la página")
    }
})

module.exports=router