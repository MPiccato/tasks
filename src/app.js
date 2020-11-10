const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

const port = process.env.port || 3000;


//conectando la base de datos

mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('Db conectada'))
    .catch(err => console.log(err));


// importando rutas

const indexRoutes = require('./routes/index.js')


// settings

app.set('port', port);
app.set('views', path.join(__dirname , 'views') );
app.set('view engine', 'ejs');



//middlewares


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

//routes


app.use('/', indexRoutes);





// iniciando servidor


app.listen(app.get('port'), () => {
    console.log('Servidor online sobre puerto ' + port)
})