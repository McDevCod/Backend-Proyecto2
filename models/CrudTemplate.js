const database = require("../libs/database")

class Crud{

    constructor(result={
                    create:{},
                    read:{},
                    update:{},
                    delete:{},
                    error:{}   
                }
    ){
        this.createResult = result.create
        this.readResult = result.read
        this.updateResult = result.update
        this.deleteResult = result.delete
        this.errorResult = result.error
    }


    async create(data,table_name){
        try{

            const result = await database.query(
                "INSERT INTO "+table_name+ " (??) VALUES(?)",
                [Object.keys(data), Object.values(data)]
            )
            
            return result
        
        }catch(error){

            return error

        }
    }

    async read(sqlQuery){
        try{
            const result = await database.query(sqlQuery)
            
            return result
              
        }catch(error){

            return error

        }
    }

    async update(data,id,table_name,condition_field){
        try{
            const result = await database.query(
                "UPDATE "+ table_name + " SET ? WHERE " +condition_field+ " = (?)",
                [data,id]
            )  
            
            return result

        }catch(error){

            return error

        }
    }

    async delete(id,table_name,condition_field){
        try{
            const result = await database.query(
                "DELETE FROM " + table_name + " WHERE " + condition_field + " = ?",
                [id]
            )  
            
            return result

        }catch(error){

            return error

        }
    }
}

module.exports= Crud