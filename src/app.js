const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//IMPORTING ROUTES
const customerRoutes = require('./routes/customer');

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//MIDDLEWARE
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: "localhost",
    user: "root",
    password: "QtJPC97#/wa",
    port: 3306,
    database: "crudnodemysql"
}, 'single'));
app.use(express.urlencoded({extended: false}));

//ROUTES
app.use("/", customerRoutes);

//STATICS FILES
app.use(express.static(path.join(__dirname, 'public')));

//SERVER LISTENING ON PORT
app.listen(app.get('port'), () => {
    console.log('SERVER ON PORT', app.get('port'));
});