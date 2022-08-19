const express = require('express');
const app = express();
const morgan = require('morgan');

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Importacion de las rutas
app.use(require('./routes/routes'));

app.listen(5000);
console.log('Servidor en el puerto 5000');