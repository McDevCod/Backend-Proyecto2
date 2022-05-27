//------------Módulos Nativos-----------//
const path = require("path")

//------------Módulos Externos----------//
const express = require("express")


//------------Constantes----------------//
const app= express()
const { port } = require("./config")

//------------Middlewares------------------//
//---Archivos Staticos para alojar CSS e imagenes que seran requeridos por los html------//
app.use(express.static(path.join(__dirname,"static")))
app.use(express.json())

///-----------------Pug Engine----------------------//
app.set("views", "./views")
app.set('view engine', 'pug')


app.get("/registro", (request, response)=>{
    response.render("registro",{
        title: "Página de Registro"
    })
})


app.listen(port, () =>{
    console.log("Escuchando en http://localhost:"+ port)
})