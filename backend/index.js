import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getAll, getSingle } from './app/database.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get('/blogs', async (req, res) =>{
    const { data, error } = await getAll('blogs');
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

app.get('/blogs/:id', async (req, res) =>{
    const { id } = req.params;
    if(!parseInt(id)){
        res.status(423).send('Enter a valid id');
        return;
    }
    const { data, error } = await getSingle('blogs', 'BlogID', id);
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

app.listen(process.env.SERVER_PORT, () =>{
    console.log('Server is running on ' + process.env.SERVER_PORT);
    console.log(`Listening on http://localhost:${process.env.SERVER_PORT}/`);
});