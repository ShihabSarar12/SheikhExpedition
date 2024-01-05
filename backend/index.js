import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getBlogs } from './app/database.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get('/', async (req, res) =>{
    console.log('Connected to server');
    const result = await getBlogs();
    res.status(200).send(result);
});

app.listen(process.env.SERVER_PORT, () =>{
    console.log('Server is running on ' + process.env.SERVER_PORT);
    console.log(`Listening on http://localhost:${process.env.SERVER_PORT}/`);
});