const express = require("express")

const router = express.Router()

router.get("/listas",(request,response)=>{
    try{
        return response.render("test",{
            title: "Página listas",
            pagina: "/listas page"
        })
    }
    catch{
        console.log("No es posible cargar la página")
    }
})

module.exports=router