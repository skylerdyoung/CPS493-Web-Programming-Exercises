const express = require('express');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

const users = require('./controllers/users');

console.log(process.env.BEST_CLASS);

app.use(express.json());

app.use('/users', users);

app.use( (err, req, res, next) =>{
    console.log(err);
    res.status(err.status || 500).send( { message: err.message } )
} )


app.get('/hello', (req, res, next) => {
    res.send('Hello Hudson Valleya! You requested ' + req.url)
  })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})