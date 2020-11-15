const express = require("express");
const router = express.Router();

/* Create new data */
router.post("/create", require("./controllers/create-product"));
router.get("/view/:id", require("./controllers/view-product-increment"));
router.post("/add-user", require("./controllers/create-user"));

/* Read data */
router.get("/read", require("./controllers/read-many-products"));
router.get("/read/:id", require("./controllers/read-single-product"));

/* modify or delete data */
router.post("/update", require("./controllers/update-product"));
router.get("/delete/:id", require("./controllers/delete-product"));
 
module.exports = router;