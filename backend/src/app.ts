import "reflect-metadata";
import { createConnection } from "typeorm";
import databaseConfig from './config/database'
import RouterBuild from './api/routers'


const express = require('express');
const cors = require('cors');

const morgan = require('morgan');

const PORT = 5000;
const app = express();

// middlewares
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(express.json());


RouterBuild(app);

createConnection(databaseConfig).then(async connection => {
    app.listen(5000, () => {
        console.log(`Running at port http://localhost:${PORT}`)
    });


}).catch(error => console.log(error));
