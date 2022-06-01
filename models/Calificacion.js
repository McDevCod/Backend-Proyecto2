const Crud= require("./CrudTemplate")

class Calificacion extends Crud{
    constructor(data){
        super()
        this.id_calificaciones = data.id_calificaciones,
        this.calificacion = data.calificacion,
        this.comentario = data.comentario,
        this.f_id_usuario = data.f_id_usuario,
        this.f_id_Items = data.f_id_Items,
        this.listas_id_listas = data.listas_id_listas,
        this.fecha = data.fecha

    }


    async create(){
        const data={
            calificacion: this.calificacion,
            comentario: this.comentario,
            f_id_usuario: this.f_id_usuario,
            f_id_Items: this.f_id_Items,
            listas_id_listas: this.listas_id_listas,
            fecha: this.fecha
        }
        try{
            const result= await super.create(data,"calificacion")
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

module.exports=Calificacion