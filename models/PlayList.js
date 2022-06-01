const Crud= require("./CrudTemplate")

class Repositorio extends Crud{
    constructor(data){
        super()
        this.id_playlist = data.id,
        this.fecha = data.fecha,
        this.f_id_Items = data.f_id_Items,
        this.f_id_listas = data.f_id_listas

    }


    async create(){
        const data={
            fecha: this.fecha,
            f_id_Items: this.f_id_Items,
            f_id_listas: this.f_id_listas,
        }
        try{
            const result= await super.create(data,"itemrepo")
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