const Crud= require("./CrudTemplate")

class Items extends Crud{
    constructor(data){
        super()
        this.id_Items = data.id,
        this.nombre = data.nombre,
        this.tipo = data.tipo,
        this.genero = data.genero,
        this.año = data.año,
        this.artista = data.artista,
        this.facts = data.facts,
        this.ruta = data.ruta,
        this.f_idcategoria = data.id_categoria,
        this.megusta = data.like,
        this.nomegusta = data.dislike
    }


    async create(){
        const data={
            username: this.username,
            password: this.password,
            nombre: this.nombre,
            apellido: this.apellido,
            email: this.email,
            fecha_nacimiento: this.fecha_nacimiento,
            f_id_perfil: this.f_id_perfil
        }
        try{
            const result= await super.create(data,"items")
            return {
                user:data,
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

module.exports=Items