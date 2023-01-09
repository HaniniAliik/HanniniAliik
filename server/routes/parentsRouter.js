const express = require("express");
const db = require("../database");

const {addParent} =require("../controller/parentController")


const router = express.Router();

router.post('/parent',addParent);
router.get('/');



module.exports = router;