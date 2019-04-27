//deals with profiles for users
const express = require("express");
const router = express.Router();

//route: GET api/profiles/test
//description: tests profile routes
//access: Public
router.get("/test", (req, res) => res.json({ msg: "Profiles works " }));

module.exports = router;
