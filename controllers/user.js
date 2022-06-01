const path=require("path")
const Usuario=require("../models/Usuario")
//const Usuarioview=require("../views/Usuario/userview")

class UserControl{

    constructor(
        data={username:"invitado",
        password:" ",
        nombre:"invitado",
        apellido:"invitado",
        email:" ",
        birthday:" ",
        f_id_perfil:" ",
        userlogin:false,
        item:0}
        ){

        this.username = data.username,
        this.password = data.password,
        this.nombre = data.nombre,
        this.apellido = data.apellido,
        this.email = data.email,
        this.fecha_nacimiento = data.birthday,
        this.f_id_perfil = data.perfil
        this.userlogin = data.login
        this.nitem = data.item
        this.data = data
    }

    render_view(ViewName,response,viewdata){
        return response.render(ViewName,{
            title:viewdata.title,
            welcome:viewdata.welcome,
            logStatus:viewdata.logStatus,
            numItem:viewdata.numItem           
        })
    }


    input_validation(data){
        const errors=[]
        if (!data.username){
            errors.push({text:"Debe completar el campo username"})
        }
        if(!data.password){
            errors.push({text:"Debe completar el campo password"})
        }
        return errors
        
    }

    async create_user(data = this.data){
        const errors = this.input_validation(data)
        if (errors.length <= 0){
            //data.password= encrypt(data.password)
            const user = new Usuario(data)
            const result = await user.create()
            if (!result.error){
                delete result.user.password
            }
            return result

        } else{

            return {
                error:true,
                message:errors
            }
        }
    }
    
    async read_users(){
        const user = new Usuario(this.data)
        const result= await user.read("SELECT id_usuario,username,password,usuario.nombre,apellido,email,fecha_nacimiento, perfil.nombre FROM usuario LEFT JOIN perfil ON usuario.f_id_perfil=perfil.id_perfil")
        return result
        
    }
   
    async update_users(data){
        const updatedata={
            nombre:data.nombre,
            apellido:data.apellido,
            fecha_nacimiento:data.fecha_nacimiento
        }
        const id = data.id
        const user = new Usuario(updatedata)
        const result= await user.update(id,updatedata,"usuario","id_usuario")
        return result      
    }



    async delete_user(data){
        const user = new Usuario(this.data)
        const result = await user.delete(data.id,"usuario","id_usuario")
        return result
        
    }


    mensaje()
    {
        console.log("Hola Vista de usuario")
    }
}


module.exports=UserControl
