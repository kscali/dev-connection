//deals with authentication
const express = require("express");
const router = express.Router();

//route: GET api/userss/test
//description: tests users routes
//access: Public
router.get("/test", (req, res) => res.json({ msg: "Users works " }));

module.exports = router;