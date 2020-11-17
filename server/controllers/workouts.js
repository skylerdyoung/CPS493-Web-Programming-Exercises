const express = require('express');
const workouts = require('../models/workouts');
const comments = require('../models/comments');
const reactions = require('../models/reactions');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        workouts.getAll().then(x=> res.send( x ) ) 
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        workouts.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/:id/comments', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        comments.getForWorkout(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/:id/reactions', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        reactions.getForWorkout(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/types', (req, res, next) => {
        workouts.getTypes().then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        workouts.search(req.query.q).then(x=> res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res, next) => {
        workouts.add(
            req.body.URL,
            req.body.Text, 
            req.body.Media_Type, 
            req.body.Privacy_Setting , 
            req.body.Owner_id, 
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
   .put('/:id', (req, res, next) => {
        workouts.update( req.params.id,
            req.body.URL,
            req.body.Text, 
            req.body.Media_Type, 
            req.body.Privacy_Setting , 
            req.body.Owner_id, 
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        workouts.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })
module.exports = router;