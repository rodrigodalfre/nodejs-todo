import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

//Routes
import apiRoutes from './routes/api';

dotenv.config();

const server = express();

server.use(cors({}));
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended:true}));

server.use('/api', apiRoutes);

server.use((req:Request, res:Response) => {
   res.status(404)
   res.json({error: "EndPoint not found"})
})

server.listen(process.env.PORT)