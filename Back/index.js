'use strict';
let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');
let errorHandler = require('errorhandler');
let cors = require('cors');

// Import models
require('./models/proyecto');

// Import routes
let proyectoRouter = require('./routes/proyecto');

// Server variable initialization
const port = 3000;
let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(errorHandler());

app.use('/proyecto', proyectoRouter);

//Make app listen on port 3000
const server = app.listen(port);
console.log('Server listening on port 3000');
module.exports = app;

//Mongo database connection
const DB_Name = 'p3m';
mongoose.connect("mongodb://localhost:27017/" + DB_Name,{
    useNewUrlParser: true,
    reconnectTries : Number.MAX_VALUE,
    autoReconnect : true,
    useUnifiedTopology: true,
    reconnectInterval: 500
}).then(() =>{
    console.log('Connection to the database successful');
}).catch(err =>{
    console.log(`Database error: ${err.message}`);
});

//Handle database connection events
mongoose.connection.on('reconnected', () => {
    console.log('Database reconnected');
});
mongoose.connection.on('error', (err) => {
    console.log(`Database error: ${err.message}`);
});
mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected');
    //If database is disconnected it wil try again
    mongoose.connect("mongodb://localhost:27017/" + DB_Name,{
        useNewUrlParser: true,
        reconnectTries : Number.MAX_VALUE,
        autoReconnect : true,
        useUnifiedTopology: true,
        reconnectInterval: 500
    });
});

