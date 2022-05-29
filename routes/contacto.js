const express = require("express")

const router = express.Router()

router.get("/contacto",(request,response)=>{
    try{
        return response.render("test",{
            title: "Página contacto",
            pagina: "/contacto Page"
        })
    }
    catch{
        console.log("No es posible cargar la página")
    }
})

module.exports=router