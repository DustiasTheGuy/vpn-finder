const express = require('express');
const router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');

/*
    all requests to /forum/* have to go through here
*/



/* Unprotected routes */
router.get('/search/:search', require('./controllers/read/search'));
router.post('/load-topics', require('./controllers/read/read-topics'));
router.get('/load-topic/:id', require('./controllers/read/read-topic'));
router.post('/sign-in', require('./controllers/read/authenticate-user'));
router.post('/sign-up', require('./controllers/create/create-user'));

router.use((req, res, next) => {
    let privateKey = fs.readFileSync('private.key');

    try {
        jwt.verify(req.headers.authorization, privateKey, { algorithms: ['RS256'] }, (err, decoded) => {
            if(err) {
                req.auth = 'Not-Authorized';
                //console.log(err);
                return next();
            };
    
            req.auth = decoded._id;
            return next();
        });

    } catch(err) {
        req.auth = 'Not-Authorized';
        return next();
    };
});

/* protected routes */
router.get('/read-user', require('./controllers/read/read-user'));
router.get('/sign-out', require('./controllers/update/sign-out'));
router.post('/upload-file', require('./controllers/create/create-image'));
router.post('/create-reply', require('./controllers/create/create-reply'));
router.post('/create-topic', require('./controllers/create/create-topic'));

module.exports = router