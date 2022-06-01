const Crud= require("./CrudTemplate")

class Lista extends Crud{
    constructor(data){
        super()
        this.id_listas = data.id,
        this.nombre = data.nombre,
        this.descripcion = data.descripcion,
        this.fecha_creacion = data.fecha_creacion,
        this.autor = data.autor,
        this.num_elementos = data.num_elementos,
        this.publico = data.publico,
        this.rating_promedio = data.rating_promedio,
        this.palabras_claves = data.palabras_claves,
        this.genero = data.genero,
        this.artista = data.artista

    }


    async create(){
        const data={
            nombre: this.nombre,
            descripcion: this.descripcion,
            fecha_creacion: this.fecha_creacion,
            autor: this.autor,
            num_elementos: this.num_elementos,
            publico: this.publico,
            rating_promedio: this.rating_promedio,
            palabras_claves: this.palabras_claves,
            genero: this.genero,
            artista: this.artista
        }
        try{
            const result= await super.create(data,"listas")
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

module.exports=Lista