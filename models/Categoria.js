const Crud= require("./CrudTemplate")

class Categoria extends Crud{
    constructor(data){
        super()
        this.id_categoria = data.id_categoria,
        this.nombre = data.nombre,
        this.descripcion = data.descripcion
    }


    async create(){
        const data={
            nombre: this.nombre,
            descripcion: this.descripcion
        }
        try{
            const result= await super.create(data,"categoria")
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

module.exports=Categoria