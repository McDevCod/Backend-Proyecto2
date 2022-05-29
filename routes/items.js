const express = require("express")

const router = express.Router()

router.get("/items",(request,response)=>{
    try{
        return response.render("test",{
            title: "Página items",
            pagina: "/items Page"
        })
    }
    catch{
        console.log("No es posible cargar la página")
    }
})

module.exports=router