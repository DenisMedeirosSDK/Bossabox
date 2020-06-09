import express from 'express';
import routes from './routes';

import connectionDB from './database/connection';

const server = express();
server.use(express.json());

connectionDB();

server.use(routes);

server.listen(3000);
