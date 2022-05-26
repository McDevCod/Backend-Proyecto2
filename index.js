//------------Módulos Nativos-----------//
const path = require("path")

//------------Módulos Externos----------//
const express = require("express")


//------------Constantes----------------//
const app= express()

//------------Middlewares------------------//
//---Archivos Staticos para alojar CSS e imagenes que seran requeridos por los html------//
app.use(express.static(path.join(__dirname,"static")))
app.use(express.json())


app.listen(port, () =>{
    console.log("Escuchando en http://localhost:"+port)
})