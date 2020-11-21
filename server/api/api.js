const express = require("express");
const router = express.Router();

/*
    all requests to /api/* have to go through here
*/

/* Create new data */
router.get("/view/:id", require("./controllers/create/view-product-increment"));
router.post("/create", require("./controllers/create/create-product"));
router.post("/add-user", require("./controllers/create/create-user"));
router.post("/send-message", require("./controllers/create/create-message"));

/* Read data */
router.get("/read", require("./controllers/read/read-many-products"));
router.get("/read/:id", require("./controllers/read/read-single-product"));
router.get("/read-message/:id", require("./controllers/read/read-message"));

/* modify or delete data */
router.get("/delete/:id", require("./controllers/delete/delete-product"));
router.post("/update", require("./controllers/update/update-product"));
 

module.exports = router;  