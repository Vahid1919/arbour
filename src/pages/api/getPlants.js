
import {query} from "./db"


export default async function handler(req, res){

    

      try{
        const sql = 'SELECT * FROM request'
        const values = []

        const data = await query({query: sql, values: values})
        res.status(200).json({results: data})

      }catch(err){
        res.status(500).json({ err: err.message})
      }

    
}