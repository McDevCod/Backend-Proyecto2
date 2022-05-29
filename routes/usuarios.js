const express = require("express")

const router = express.Router()

router.get("/usuarios",(request,response)=>{
    try{
        return response.render("test",{
            title: "Página usuarios",
            pagina: "/usuarios page"
        })
    }
    catch{
        console.log("No es posible cargar la página")
    }
})

router.get("/usuarios/registro",(request,response)=>{
    try{
        return response.render("usuario/registro",{
            Title: "Página de Registro"
        })
    }
    catch{
        console.log("No es posible cargar la página")
    }
})


module.exports=router