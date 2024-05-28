const express = require('express');
require('dotenv').config();
const {dbConnection} = require('./database/config')


// servidor de express
const app = express();

// Directorio publico
app.use(express.static('public'));

// conexion a db
dbConnection();

// Lectura y parseo de body
app.use(express.json());

//RUTAS
app.use('/api/auth',require('./routes/auth'))
app.use('/api/events',require('./routes/events'))


// escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log(`server corriendo en http://localhost:${process.env.PORT}`);
})