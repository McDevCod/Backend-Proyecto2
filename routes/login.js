const express = require("express")

const router = express.Router()

router.get("/login",(request,response)=>{
    try{
        return response.render("login",{
            title: "Página login",
            pagina: "/login page"
        })
    }
    catch{
        console.log("No es posible cargar la página")
    }
})

module.exports=router