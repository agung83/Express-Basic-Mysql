const express = require('express')
// const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path')
const app = express()
const port = 8000
const mysql = require('mysql');
// const controllers = require('./controllers/index.controllers');
const indexRoutes = require('./routes/index.routes');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_berita_sumbar'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

//body parser berguna untuk menagkap data data input di form
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json()); // parse form data client


//setup view engine hbs
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

//ini untuk konfigurasi load css dan js di public
app.use(express.static('public'))


app.use('/', indexRoutes);






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})