const express = require("express");
const router = express.Router();

/*
    all requests to /forum/* have to go through here
*/


router.get('/', (req, res) => {
    res.json({});
});
 

module.exports = router;  