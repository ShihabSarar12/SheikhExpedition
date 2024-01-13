import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import {
    deleteSingle, 
    getAll, 
    getSingle, 
    insertBlog, 
    insertProject, 
    insertService, 
    insertTeammember, 
    updateBlog,
    updateProject,
    updateService,
    updateTeammember
} from './app/database.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        console.log(file);
        return cb(null, './pictures');
    },
    filename: (req, file, cb) =>{
        console.log(file);
        console.log(path.extname(file.originalname));
        return cb(null, `${Date.now()}_${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage
});

app.get('/:entity', async (req, res) =>{
    const { entity } = req.params;
    const { data, error } = await getAll(entity);
    if(error){
        res.status(423).send(`${error}: error occurred!`);
        return;
    }
    if(data){
        res.status(200).send(data);
        return;
    }
    res.status(204).send('No data found!');
});

app.get('/:entity/:id', async (req, res) =>{
    const { entity, id } = req.params;
    if(!parseInt(id)){
        res.status(423).send('Enter a valid id');
        return;
    }
    const entityID = `${entity.charAt(0).toUpperCase() + entity.slice(1, -1)}ID`;
    const { data, success, error } = await getSingle(entity, entityID, id);
    if(error){
        res.status(423).send(`${error}: error occurred!`);
        return;
    }
    if(success && data){
        res.status(200).send(data);
        return;
    }
    res.status(204).send('No data found!');
});

app.post('/blogs', upload.single('BlogImage'), async (req, res)=>{
    const { BlogTitle, BlogContent, BlogAuthor } = req.body;
    if(!BlogTitle || !BlogContent || !BlogAuthor){
        res.status(423).send("Missing fields!");
        return;
    }
    console.log(req.file);
    const BlogImage = '';
    const { data, success, error } = await insertBlog(BlogTitle, BlogContent, BlogImage, BlogAuthor);
    if(error){
        res.status(423).send(`${error}: error occurred!`);
        return;
    }
    if(data && success){
        res.status(200).send(data);
        return;
    }
    if(data && !success){
        res.status(200).send('Already inserted');
        return;
    }
    res.status(404).send('Error occurred!');
});

app.post('/projects', async (req, res)=>{
    const { ProjectName, ProjectDescription, ProjectImage, StartDate, EndDate, Status, Budget } = req.body;
    if(!ProjectName || !ProjectDescription || !ProjectImage || !StartDate || !EndDate || !Status || !Budget){
        res.status(423).send("Missing fields!");
        return;
    }
    const { data, success, error } = await insertProject(ProjectName, ProjectDescription, ProjectImage, StartDate, EndDate, Status, Budget);
    if(error){
        res.status(423).send(`${error}: error occurred!`);
        return;
    }
    if(data && success){
        res.status(200).send(data);
        return;
    }
    if(data && !success){
        res.status(200).send('Already inserted');
        return;
    }
    res.status(404).send('Error occurred!');
});

app.post('/services', async (req, res)=>{
    const { ServiceName, ServiceDescription, ServiceImage, ServiceDuration } = req.body;
    if(!ServiceName || !ServiceDescription || !ServiceImage || !ServiceDuration){
        res.status(423).send("Missing fields!");
        return;
    }
    const { data, success, error } = await insertService(ServiceName, ServiceDescription, ServiceImage,  ServiceDuration);
    if(error){
        res.status(423).send(`${error}: error occurred!`);
        return;
    }
    if(data && success){
        res.status(200).send(data);
        return;
    }
    if(data && !success){
        res.status(200).send('Already inserted');
        return;
    }
    res.status(404).send('Error occurred!');
});

app.post('/teammembers', async (req, res)=>{
    const { TeamMemberName, TeamMemberImage, TeamMemberPosition, TeamMemberContact, TeamMemberEmail } = req.body;
    if(!TeamMemberName || !TeamMemberImage || !TeamMemberPosition || !TeamMemberContact || !TeamMemberEmail){
        res.status(423).send("Missing fields!");
        return;
    }
    const { data, success, error } = await insertTeammember(TeamMemberName, TeamMemberImage, TeamMemberPosition, TeamMemberContact, TeamMemberEmail);
    if(error){
        res.status(423).send(`${error}: error occurred!`);
        return;
    }
    if(data && success){
        res.status(200).send(data);
        return;
    }
    if(data && !success){
        res.status(200).send('Already inserted');
        return;
    }
    res.status(404).send('Error occurred!');
});

app.put('/blogs/:id', async (req, res) =>{
    const { id } = req.params;
    if(!parseInt(id)){
        res.status(423).send('Enter a valid id');
        return;
    }
    const { BlogTitle, BlogContent, BlogImage, BlogAuthor } = req.body;
    if(!BlogTitle || !BlogContent || !BlogImage || !BlogAuthor){
        res.status(423).send("Missing fields!");
        return;
    }
    const { data, success, error } = await updateBlog(id, BlogTitle, BlogContent, BlogImage, BlogAuthor);
    if(error){
        res.status(423).send(`${error}: error occurred!`);
        return;
    }
    if(data && success){
        res.status(200).send(data);
        return;
    }
    res.status(404).send('Error occurred!');
});

app.put('/services/:id', async (req, res) =>{
    const { id } = req.params;
    if(!parseInt(id)){
        res.status(423).send('Enter a valid id');
        return;
    }
    const { ServiceName, ServiceDescription, ServiceImage, ServiceDuration } = req.body;
    if(!ServiceName || !ServiceDescription || !ServiceImage || !ServiceDuration){
        res.status(423).send("Missing fields!");
        return;
    }
    const { data, success, error } = await updateService(id, ServiceName, ServiceDescription, ServiceImage,  ServiceDuration);
    if(error){
        res.status(423).send(`${error}: error occurred!`);
        return;
    }
    if(data && success){
        res.status(200).send(data);
        return;
    }
    res.status(404).send('Error occurred!');
});

app.put('/projects/:id', async (req, res) =>{
    const { id } = req.params;
    if(!parseInt(id)){
        res.status(423).send('Enter a valid id');
        return;
    }
    const { ProjectName, ProjectDescription, ProjectImage, StartDate, EndDate, Status, Budget } = req.body;
    if(!ProjectName || !ProjectDescription || !ProjectImage || !StartDate || !EndDate || !Status || !Budget){
        res.status(423).send("Missing fields!");
        return;
    }
    const { data, success, error } = await updateProject(id, ProjectName, ProjectDescription, ProjectImage,  StartDate, EndDate, Status, Budget);
    if(error){
        res.status(423).send(`${error}: error occurred!`);
        return;
    }
    if(data && success){
        res.status(200).send(data);
        return;
    }
    res.status(404).send('Error occurred!');
});

app.put('/teammembers/:id', async (req, res) =>{
    const { id } = req.params;
    if(!parseInt(id)){
        res.status(423).send('Enter a valid id');
        return;
    }
    const { TeamMemberName, TeamMemberImage, TeamMemberPosition, TeamMemberContact, TeamMemberEmail } = req.body;
    if(!TeamMemberName || !TeamMemberImage || !TeamMemberPosition || !TeamMemberContact || !TeamMemberEmail){
        res.status(423).send("Missing fields!");
        return;
    }
    const { data, success, error } = await updateTeammember(id, TeamMemberName, TeamMemberImage,  TeamMemberPosition, TeamMemberContact, TeamMemberEmail);
    if(error){
        res.status(423).send(`${error}: error occurred!`);
        return;
    }
    if(data && success){
        res.status(200).send(data);
        return;
    }
    res.status(404).send('Error occurred!');
});

app.delete('/:entity/:id',async (req, res)=>{
    const { entity, id } = req.params;
    if(!parseInt(id)){
        res.status(423).send('Enter a valid id');
        return;
    }
    const entityID = `${entity.charAt(0).toUpperCase() + entity.slice(1, -1)}ID`;
    const { data, success, error } = await deleteSingle(entity, entityID, id);
    if(error){
        res.status(423).send(`${error}: error occurred!`);
        return;
    }
    if(data && success){
        res.status(200).send(data);
        return;
    }
    res.status(204).send('No data found!');
});

app.listen(process.env.SERVER_PORT, () =>{
    console.log('Server is running on ' + process.env.SERVER_PORT);
    console.log(`Listening on http://localhost:${process.env.SERVER_PORT}/`);
});