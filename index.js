
const path = require( 'path' );
const express = require('express');
require('dotenv').config();
const {dbConnection} = require('./database/config')
var cors = require('cors')



// servidor de express
const app = express();

// Directorio publico
app.use(express.static('public'));

// conexion a db
dbConnection();

/// para control de las cors
app.use(cors());

// Lectura y parseo de body
app.use(express.json());

//RUTAS
app.use('/api/auth',require('./routes/auth'))
app.use('/api/events',require('./routes/events'))

/// Esto es para que todas las rutas se vayan al sitio web estatico
app.use( '*', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'public/index.html' ) );
} );

// escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log(`server corriendo en http://localhost:${process.env.PORT}`);
})