const express = require("express");


const {addParent,editParent,getParent,deleteParent} =require("../../controller/parent/parentController")


const router = express.Router();
router.get('/parent',getParent);
router.post('/parent',addParent);
router.put('/parent/:idparent',editParent);
router.delete('/parent/:idparent',deleteParent);


module.exports = router;