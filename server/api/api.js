const express = require("express");
const router = express.Router();

router.post("/create", require("./controllers/create-product"));
router.get("/read", require("./controllers/read-product"));
router.put("/update", require("./controllers/update-product"));
router.post("/delete", require("./controllers/delete-product"));
router.get("/view/:id", require("./controllers/view-product-increment"))
router.post("/add-user", require("./controllers/create-user"));

module.exports = router;