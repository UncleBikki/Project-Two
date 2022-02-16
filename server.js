const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const { Sequelize } = require('sequelize/dist');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(routes);


let sequelize;

if (procces.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, proccess.env.DB_USER, proccess.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}