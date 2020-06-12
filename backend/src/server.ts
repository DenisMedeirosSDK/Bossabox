import express from 'express';
import routes from './routes';
import cors from 'cors';

import connectionDB from './database/connection';

const server = express();
server.use(express.json());
server.use(cors());
connectionDB();

server.use(routes);

server.listen(3333);
