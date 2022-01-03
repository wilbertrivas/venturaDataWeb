import sql from 'mssql';
import config from '../config'

const dbSettings={
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
    port: parseInt(config.dbPort),
    options: {
       trustServerCertificate: true,
      }
};

export async function getConnection(){
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch(error){
        console.log(error);
    }
}

export {sql};//exportamos l
 //const result=await pool.request().query('SELECT * FROM [dbo].[usuario]');
    //console.log(result)
//getConnection();