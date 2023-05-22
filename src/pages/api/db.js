import mysql from "mysql2/promise"


export async function query({query, values}){

    const dbconnection = await mysql.createConnection({
        host: 'containers-us-west-61.railway.app',
        database: 'railway',
        user: 'root',
        port: 7681,
        password: 'Hn69EK7rucTAAQrbquk5',

      });

      try{
      
        const [results] = await dbconnection.execute(query, values)
        dbconnection.end()
        return results
      }catch(err){
        throw Error(err.message)
      }

    
}

