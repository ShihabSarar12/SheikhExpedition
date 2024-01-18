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
                success: false,
                error: 'DATA_NOT_AVAILABLE'
            }
        }
        return {
            data: data[0],
            success: true,
            error: null
        }
    } catch(error){
        return {
            data: null,
            success: false,
            error: error.code
        }
    }
}

const insertBlog = async (blogTitle, blogContent, blogImage, blogAuthor) =>{
    try{
        const [ dataAvailable ] = await pool.query(`SELECT * FROM blogs WHERE BlogTitle = ?`, [ blogTitle ]);
        if(dataAvailable.length !== 0){
            return {
                data: dataAvailable[0],
                success: false,
                error: null
            }
        }
        const [ { affectedRows } ] = await pool.query(`INSERT INTO blogs (BlogTitle, BlogContent, BlogImage, BlogAuthor) VALUES (?, ?, ?, ?);`, [ blogTitle, blogContent, blogImage, blogAuthor ]);
        if(affectedRows === 0){
            return {
                data: null,
                success: false,
                error: 'INSERTION_FAILED'
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

const insertTeammember = async (teammemberName, teammemberImage, teammemberPosition, teammemberContact, teammemberEmail) =>{
    try{
        const [ dataAvailable ] = await pool.query(`SELECT * FROM teammembers WHERE TeamMemberEmail = ? AND TeamMemberName = ?;`, [ teammemberEmail, teammemberName ]);
        if(dataAvailable.length !== 0){
            return {
                data: dataAvailable[0],
                success: false,
                error: null
            }
        }
        const [ { affectedRows } ] = await pool.query(`INSERT INTO teammembers (TeamMemberName, TeamMemberImage, TeamMemberPosition, TeamMemberContact, TeamMemberEmail) VALUES (?, ?, ?, ?, ?);`, [ teammemberName, teammemberImage, teammemberPosition, teammemberContact, teammemberEmail ]);
        if(affectedRows === 0){
            return {
                data: null,
                success: false,
                error: 'INSERTION_FAILED'
            }
        }
        const { data, error } = await getSingle('teammembers', 'TeamMemberName', teammemberName);
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

const insertProject = async (projectName, projectDescription, projectImage, startDate, endDate, status, budget) =>{
    try{
        const [ dataAvailable ] = await pool.query(`SELECT * FROM projects WHERE ProjectName = ?`, [ projectName ]);
        if(dataAvailable.length !== 0){
            return {
                data: dataAvailable[0],
                success: false,
                error: null
            }
        }
        const [ { affectedRows } ] = await pool.query(`INSERT INTO projects (ProjectName, ProjectDescription, ProjectImage, StartDate, EndDate, Status, Budget) VALUES (?, ?, ?, ?, ?, ?, ?);`, [ projectName, projectDescription, projectImage, startDate, endDate, status, budget  ]);
        if(affectedRows === 0){
            return {
                data: null,
                success: false,
                error: 'INSERTION_FAILED'
            }
        }
        // TODO have to declare the names unique in database
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

const insertService = async (serviceName, serviceDescription, serviceImage, serviceDuration) =>{
    try{
        const [ dataAvailable ] = await pool.query(`SELECT * FROM services WHERE ServiceName = ?`, [ serviceName ]);
        if(dataAvailable.length !== 0){
            return {
                data: dataAvailable[0],
                success: false,
                error: null
            }
        }
        const [ { affectedRows } ] = await pool.query(`INSERT INTO services (ServiceName, ServiceDescription, ServiceImage, ServiceDuration) VALUES (?, ?, ?, ?);`, [ serviceName, serviceDescription, serviceImage, serviceDuration ]);
        if(affectedRows === 0){
            return {
                data: null,
                success: false,
                error: 'INSERTION_FAILED'
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

const updateBlog = async (blogID, blogTitle, blogContent, blogImage, blogAuthor) =>{
    try{
        const [ dataAvailable ] = await pool.query(`SELECT * FROM blogs WHERE BlogID = ?;`, [ blogID ]);
        if(dataAvailable.length === 0){
            return {
                data: null,
                success: false,
                error: 'DATA_NOT_AVAILABLE'
            }
        }
        const [ { affectedRows } ] = await pool.query(`UPDATE blogs SET BlogTitle = ?, BlogContent = ?, BlogImage = ?, BlogAuthor = ? WHERE BlogID = ?;`,[ blogTitle, blogContent, blogImage, blogAuthor, blogID ]);
        if(affectedRows === 0){
            return {
                data: null,
                success: false,
                error: 'UPDATE_FAILED'
            };
        }
        const { data, error } = await getSingle('blogs', 'BlogID', blogID);
        return {
            data,
            success: true,
            error
        }
    } catch(error){
        return {
            data: null,
            success: false,
            error: error.code
        }
    }
}

const updateService = async (serviceID, serviceName, serviceDescription, serviceImage, serviceDuration) =>{
    try{
        const [ dataAvailable ] = await pool.query(`SELECT * FROM services WHERE ServiceID = ?;`, [ serviceID ]);
        if(dataAvailable.length === 0){
            return {
                data: null,
                success: false,
                error: 'DATA_NOT_AVAILABLE'
            }
        }
        const [ { affectedRows } ] = await pool.query(`UPDATE services SET ServiceName = ?, ServiceDescription = ?, ServiceImage = ?, ServiceDuration = ? WHERE ServiceID = ?;`,[ serviceName, serviceDescription, serviceImage, serviceDuration, serviceID ]);
        if(affectedRows === 0){
            return {
                data: null,
                success: false,
                error: 'UPDATE_FAILED'
            };
        }
        const { data, error } = await getSingle('services', 'ServiceID', serviceID);
        return {
            data,
            success: true,
            error
        }
    } catch(error){
        return {
            data: null,
            success: false,
            error: error.code
        }
    }
}

const updateTeammember = async (teammemberID, teammemberName, teammemberImage, teammemberPosition, teammemberContact, teammemberEmail) =>{
    try{
        const [ dataAvailable ] = await pool.query(`SELECT * FROM teammembers WHERE TeamMemberID = ?;`, [ teammemberID ]);
        if(dataAvailable.length === 0){
            return {
                data: null,
                success: false,
                error: 'DATA_NOT_AVAILABLE'
            }
        }
        const [ { affectedRows } ] = await pool.query(`UPDATE teammembers SET TeamMemberName = ?, TeamMemberImage = ?, TeamMemberPosition = ?, TeamMemberContact = ?, TeamMemberEmail = ? WHERE TeamMemberID = ?;`,[ teammemberName, teammemberImage, teammemberPosition, teammemberContact, teammemberEmail, teammemberID ]);
        if(affectedRows === 0){
            return {
                data: null,
                success: false,
                error: 'UPDATE_FAILED'
            };
        }
        const { data, error } = await getSingle('teammembers', 'TeamMemberID', teammemberID);
        return {
            data,
            success: true,
            error
        }
    } catch(error){
        return {
            data: null,
            success: false,
            error: error.code
        }
    }
}

const updateProject = async (projectID, projectName, projectDescription, projectImage, startDate, endDate, status, budget) =>{
    try{
        const [ dataAvailable ] = await pool.query(`SELECT * FROM projects WHERE ProjectID = ?;`, [ projectID ]);
        if(dataAvailable.length === 0){
            return {
                data: null,
                success: false,
                error: 'DATA_NOT_AVAILABLE'
            }
        }
        const [ { affectedRows } ] = await pool.query(`UPDATE projects SET ProjectName = ?, ProjectDescription = ?, ProjectImage = ?, StartDate = ?, EndDate = ?, Status = ?, Budget = ? WHERE ProjectID = ?;`,[ projectName, projectDescription, projectImage, startDate, endDate, status, budget, projectID ]);
        if(affectedRows === 0){
            return {
                data: null,
                success: false,
                error: 'UPDATE_FAILED'
            };
        }
        const { data, error } = await getSingle('projects', 'ProjectID', projectID);
        return {
            data,
            success: true,
            error
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
            error: 'DELETION_FAILED'
        };
    } catch(error){
        return {
            data: null,
            success: false,
            error: error.code
        }
    }
}

export { 
    getAll, 
    getSingle, 
    deleteSingle, 
    insertBlog, 
    insertProject, 
    insertService,
    insertTeammember,
    updateBlog,
    updateService,
    updateProject,
    updateTeammember
};