const express = require('express');
const router = express.Router();

/*
    all requests to /forum/* have to go through here
*/


/* Create new data */
router.post('/create-topic', require('./controllers/create/create-topic'));
router.post('/create-user', require('./controllers/create/create-user'));


/* Read existing data */
router.post('/sign-in', require('./controllers/read/authenticate-user'));

module.exports = router;  