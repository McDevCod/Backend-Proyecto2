//------------Módulos -----------//
const express = require("express")
const path = require("path")
const database= require("./libs/database")

//------------Inicialization----------//
const app= express()
const { port } = require("./config")  //app.set('port'.process.env.PORT|| 3000);

//--------Settings-----/
app.set("views",'./views')
app.set("view engine","pug")


//--------------Middlewares------------//
const index=require("./routes/index")
const items=require("./routes/items")
const about=require("./routes/about")
const contacto=require("./routes/contacto")
const login=require("./routes/login")
const repositorio=require("./routes/repositorio")
const soporte=require("./routes/soporte")
const usuarios=require("./routes/usuarios")
const listas=require("./routes/listas")

app.use(express.json())


//------------Global Variables----------------//



//------------Routes------------------------//
app.use(index)
app.use(usuarios)
app.use(items)
app.use(listas)
app.use(repositorio)
app.use(about)
app.use(contacto)
app.use(soporte)
app.use(login)



//-------------------Static ----------------//
app.use(express.static(path.join(__dirname,"static")))




//----------listening-------------------------//
app.listen(port, () =>{
    console.log("Escuchando en http://localhost:"+ port)
})