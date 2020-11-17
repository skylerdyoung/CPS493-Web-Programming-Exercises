const express = require('express');
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

app.use('/users', users);
app.use('/workouts', workouts);
app.use('/comments', comments);
app.use('/reactions', reactions);
app.use('/followers', followers);

app.use( (err, req, res, next) =>{
    console.log(err);
    res.status(err.status || 500).send( { message: err.message } )
} )


app.get('/', (req, res, next) => {
    res.send('Welcome to 2020 Web Programming App: Flexercise (Working Title)')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})