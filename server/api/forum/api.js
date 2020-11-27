const express = require('express');
const router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');

/*
    all requests to /forum/* have to go through here
*/


/* Create new data */
router.post('/create-topic', require('./controllers/create/create-topic'));
router.post('/create-user', require('./controllers/create/create-user'));


/* Read existing data */
router.post('/sign-in', require('./controllers/read/authenticate-user'));

router.use((req, res, next) => {
    let privateKey = fs.readFileSync('private.key');
    jwt.verify(req.headers.authorization, privateKey, { algorithms: ['RS256'] }, (err, decoded) => {
        if(err) {
            console.log(err);
            return next();
        };

        req.auth = decoded._id;
        return next();
    });
});

router.get('/read-user', require('./controllers/read/read-user'));
router.get('/sign-out', require('./controllers/update/sign-out'));

module.exports = router