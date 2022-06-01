const express = require("express")

const router = express.Router()

const ItemControl=require("../controllers/itemCtrl")

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
/*
router.get("/usuario/view",async(request,response)=>{
    const usercontrol=new Usercontrol()
    const result =await usercontrol.read_users()
    console.log(result)
    if (!result.error){
        response.json(result.data) 
    }else{
        response.json(result.message)
    }


})

router.get("/usuario/registro",(request,response)=>{
try{
    const usercontrol=new Usercontrol()
    const viewdata = {
        title:"Pagina de registro",
        welcome:"Bienvenido " + usercontrol.nombre,
        logStatus:"LogIn",
        numItem:usercontrol.nitem          
    }
    return usercontrol.render_view("usuario/registro",response,viewdata)
}
catch{
    console.log("No es posible cargar la página")
}
})


router.post("/usuario/registro",async (request,response)=>{
    const usercontrol=new Usercontrol(request.body)
    const result=await usercontrol.create_user()
    console.log("la respuesta fue")
    console.log(result)
    if (!result.error){
        //renderizar a pagina main y enviar user id para el bienvenido
        response.json(result)   
    }else{
        //renderizar a pagina de registro y mostrar errores
        response.json(result.message)
    }   

})

router.put("/usuario/update",async (request,response)=>{
    const usercontrol=new Usercontrol(request.body)
    const result=await usercontrol.update_users(request.body)
    if (!result.error){
        //renderizar a pagina main y enviar user id para el bienvenido
        response.json(result.data)   
    }else{
        //renderizar a pagina de registro y mostrar errores
        response.json(result.message)
    }  

})

router.delete("/usuario/delete",async (request,response)=>{
    const usercontrol=new Usercontrol(request.body)
    const result=await usercontrol.delete_user(request.body)
    if (!result.error){
        //renderizar a pagina main y enviar user id para el bienvenido
        response.json(result.data)   
    }else{
        //renderizar a pagina de registro y mostrar errores
        response.json(result.message)
    }  

})
*/



module.exports=router