const Crud= require("./CrudTemplate")

class Usuario extends Crud{

    constructor(data={
        id:-1,
        username :" ",
        password : " ",
        nombre : " ",
        apellido : " ",
        email : " ",
        fecha_nacimiento : " ",
        f_id_perfil : 1
    }){
        super()
        this.id_user = data.id,
        this.username = data.username,
        this.password = data.password,
        this.nombre = data.nombre,
        this.apellido = data.apellido,
        this.email = data.email,
        this.fecha_nacimiento = data.birthday,
        this.f_id_perfil = 1
        this.data = data

        
    }


//--------------setters------------------//
    setdata(data){
        this.username = data.username,
        this.password = data.password,
        this.nombre = data.nombre,
        this.apellido = data.apellido,
        this.email = data.email,
        this.fecha_nacimiento = data.fecha_nacimiento,
        this.f_id_perfil = data.perfil
    }

//--------------getters------------------//
    getdata(){
        let data = {
            username: this.username,
            password: this.password,
            nombre: this.nombre,
            apellido: this.apellido,
            email: this.email,
            fecha_nacimiento: this.fecha_nacimiento,
            f_id_perfil: this.f_id_perfil
        }
    
        return data
    }


//--------------Crud_Methods-------------//

    async create(){
        const userdata={
            username: this.username,
            password: this.password,
            nombre: this.nombre,
            apellido: this.apellido,
            email: this.email,
            fecha_nacimiento: this.fecha_nacimiento,
            f_id_perfil: this.f_id_perfil
        }
        try{
            const result= await super.create(userdata,"usuario")
            console.log("result desde el template crud")
            console.log(result)
            
            return {
                user_id:result.insertId,
                user:userdata,
                error:result.error,
                message:result.message
            }

        }catch(error){
            return error

        }
        
    }

    async read(sqlQuery){
        try{
            const result = await super.read(sqlQuery)
            
            return {
                data:result,
                error:result.error,
                message:result.message
            }

        }catch(error){
            return error
        }
    }



    async update(id,data,table_name,condition_field){
        try{
            const result = await super.update(data,id,table_name,condition_field)
            return {
                data:result,
                error:result.error,
                message:result.message
            }
        }catch(error){
            return error
        }
    }
 

    async delete(id,table_name,condition_field){
        try{

            const result = await super.delete(id,table_name,condition_field)
            
            return {
                data:result,
                error:result.error,
                message:result.message
            }

        }catch(error){

            return error
        }
    }

}



module.exports=Usuario
