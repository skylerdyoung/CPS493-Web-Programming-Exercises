const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

const users = require('./controllers/users');
const workouts = require('./controllers/workouts');
const comments = require('./controllers/comments');
const reactions = require('./controllers/reactions');
const followers = require('./controllers/followers');

console.log(process.env.BEST_CLASS);

app.use(express.json());
app.use('/public',express.static( __dirname + '/public/'))
app.use(express.static( __dirname + '/../docs/'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/users', users);
app.use('/workouts', workouts);
app.use('/comments', comments);
app.use('/reactions', reactions);
app.use('/followers', followers);

app.get('*', (req, res, next) => {
    const filename = path.join(__dirname, '/../docs/index.html');
    console.log(filename);
    res.sendFile( filename );
})

app.use( (err, req, res, next) =>{
    console.log(err);
    res.status(err.status || 500).send( { message: err.message } )
} )


app.get('/', (req, res, next) => {
    res.send('Welcome to 2020 Web Programming App: Flexercise (Working Title) TESTING')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})