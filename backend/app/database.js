import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}).promise();


// TODO have to specify all the errors
const getAll = async (entity) =>{   
    try{
        const [ data ] = await pool.query(`SELECT * FROM ??;`,[ entity ]);
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
        const [ data ] = await pool.query(`SELECT * FROM ?? WHERE ?? = ?;`, [ entity, attribute, value ]);
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

const insertBlog = async (blogTitle, blogContent, blogAuthor) =>{
    try{
        const [ dataAvailable ] = await pool.query(`SELECT * FROM blogs WHERE BlogTitle = ? AND BlogContent = ?`, [ blogTitle, blogContent ]);
        if(dataAvailable.length !== 0){
            return {
                data: dataAvailable[0],
                success: false,
                error: null
            }
        }
        const [ { affectedRows } ] = await pool.query(`INSERT INTO blogs (BlogTitle, BlogContent, BlogAuthor) VALUES (?, ?, ?);`, [ blogTitle, blogContent, blogAuthor ]);
        if(affectedRows === 0){
            return {
                data: null,
                success: false,
                error: null
            }
        }
        const { data, error } = await getSingle('blogs', 'BlogTitle', blogTitle);
        if(error){
            return {
                data: null,
                success: false,
                error
            }
        }
        if(data){
            return {
                data,
                success: true,
                error: null
            };
        }
    } catch(error){
        return {
            data: null,
            success: false,
            error: error.code
        }
    }
}

const insertProject = async (projectName, projectDescription, startDate, endDate, status, budget) =>{
    try{
        const [ dataAvailable ] = await pool.query(`SELECT * FROM projects WHERE ProjectName = ? AND ProjectDescription = ?`, [ projectName, projectDescription ]);
        if(dataAvailable.length !== 0){
            return {
                data: dataAvailable[0],
                success: false,
                error: null
            }
        }
        const [ { affectedRows } ] = await pool.query(`INSERT INTO projects (ProjectName, ProjectDescription, StartDate, EndDate, Status, Budget) VALUES (?, ?, ?, ?, ?, ?);`, [ projectName, projectDescription, startDate, endDate, status, budget ]);
        if(affectedRows === 0){
            return {
                data: null,
                success: false,
                error: null
            }
        }
        // TODO have to declares the names unique in database
        const { data, error } = await getSingle('projects', 'ProjectName', projectName);
        if(error){
            return {
                data: null,
                success: false,
                error
            }
        }
        if(data){
            return {
                data,
                success: true,
                error: null
            };
        }
    } catch(error){
        return {
            data: null,
            success: false,
            error: error.code
        }
    }
}

const insertService = async (serviceName, serviceDescription, serviceDuration) =>{
    try{
        const [ dataAvailable ] = await pool.query(`SELECT * FROM services WHERE ServiceName = ? AND ServiceDescription = ?`, [ serviceName, serviceDescription ]);
        if(dataAvailable.length !== 0){
            return {
                data: dataAvailable[0],
                success: false,
                error: null
            }
        }
        const [ { affectedRows } ] = await pool.query(`INSERT INTO services (ServiceName, ServiceDescription, ServiceDuration) VALUES (?, ?, ?);`, [ serviceName, serviceDescription, serviceDuration ]);
        if(affectedRows === 0){
            return {
                data: null,
                success: false,
                error: null
            }
        }
        const { data, error } = await getSingle('services', 'ServiceName', serviceName);
        if(error){
            return {
                data: null,
                success: false,
                error
            }
        }
        if(data){
            return {
                data,
                success: true,
                error: null
            };
        }
    } catch(error){
        return {
            data: null,
            success: false,
            error: error.code
        }
    }
}

const deleteSingle = async (entity, attribute, value) =>{
    try{
        const { data, error } = await getSingle(entity, attribute, value);
        if(error){
            return {
                data: null,
                success: false,
                error
            }
        }
        const [ { affectedRows } ] = await pool.query(`DELETE FROM ?? WHERE ?? = ?;`, [ entity, attribute, value ]);
        if(affectedRows > 0){
            return {
                data,
                success: true,
                error: null
            };
        }
        return {
            data: null,
            success: false,
            error: null
        };
    } catch(error){
        return {
            data: null,
            success: false,
            error: error.code
        }
    }
}

export { getAll, getSingle, deleteSingle, insertBlog, insertProject, insertService };