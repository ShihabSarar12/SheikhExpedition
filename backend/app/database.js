import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}).promise();

const getAll = async (entity) =>{   
    try{
        const [ data ] = await pool.query(`SELECT * FROM ??`,[ entity ]);
        return {
            data,
            error: null
        }
    } catch(error){
        return {
            data: null,
            error: error.code
        }
    }
}

const getSingle = async (entity, attribute, value) =>{
    try{
        const [ data ] = await pool.query(`SELECT * FROM ?? WHERE ?? = ?`, [ entity, attribute, value ]);
        if(data.length === 0){
            return {
                data: null,
                error: null
            }
        }
        return {
            data: data[0],
            error: null
        }
    } catch(error){
        return {
            data: null,
            error: error.code
        }
    }
}


export { getAll, getSingle };