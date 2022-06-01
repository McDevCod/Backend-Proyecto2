const Crud= require("./CrudTemplate")

class Repositorio extends Crud{
    constructor(data){
        super()
        this.id_repositorio = data.id,
        this.fecha_actualizacion = data.fecha_actualizacion,
        this.f_id_usuario = data.f_id_usuario,
        this.f_id_listas = data.f_id_listas,
        this.tipo = data.tipo

    }


    async create(){
        const data={
            fecha_actualizacion: this.fecha_actualizacion,
            f_id_usuario: this.f_id_usuario,
            f_id_listas: this.f_id_listas,
            tipo: this.tipo
        }
        try{
            const result= await super.create(data,"listrepo")
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

module.exports=Repositorio