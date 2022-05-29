const  formatDate=require("../helpers/funciones")
const database = require("../libs/database")

class Usuario{

    constructor(data){
    this.username = data.username,
    this.password = data.password,
    this.nombre = data.nombre,
    this.apellido = data.apellido,
    this.email = data.email,
    this.fecha_nacimiento = data.fecha_nacimiento,
    this.f_id_perfil = data.perfil
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

            const result = await database.query(
                "INSERT INTO usuario(??) VALUES(?)",
                [Object.keys(userdata), Object.values(userdata)]
            )

            delete userdata.password 

        return {
            user:userdata,
            userid:result.insertId,
            success:true,
        }
        
        }catch(error){
            return {
                create_error:error,
                success:false
            }
        }
        
    }

    async read(sqlQuery){

    }

    async update(data){

    }
 

    async delete(id){

    }

}



module.exports=Usuario
