const express = require("express");
const router = express.Router();

router.post('/create', require("./controllers/create"));
router.get('/read', require("./controllers/read"));
router.put("/update", require("./controllers/update"));
router.post("/delete", require("./controllers/delete"));

module.exports = router;