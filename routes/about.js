const express = require("express")

const router = express.Router()

router.get("/about",(request,response)=>{
    try{
        return response.render("test",{
            title: "Página about",
            pagina: "/about Page"
        })
    }
    catch{
        console.log("No es posible cargar la página")
    }
})

module.exports=router