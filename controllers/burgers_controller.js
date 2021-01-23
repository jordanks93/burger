// LOAD DEPENDENCIES
var express = require('express');
var router = express.Router();

// Import burger model to access burger db functions
var burger = require('../models/burger.js');

// Create routes
// get all burgers route
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// add burger route
router.post('/api/burgers', (req, res) => {
    burger.addOne(['burger_name'],
     [
        req.body.burger_name
     ], (data) => {
        // redirect to origin page, new burger will display
        res.redirect('/');
    });
});

// update burger route
router.put('/api/burgers/:id', (req, res) => {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, (data) => {
        // redirect to origin page, burger devour state will update
        res.redirect('/');
    });
});

module.exports = router;