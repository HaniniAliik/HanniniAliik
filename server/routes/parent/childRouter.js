const express = require("express");


const {getOneChild,deleteOneChild,editChild,addChild,deleteAllChildren,getAllChildren}=require("../../controller/parent/childController")


const router = express.Router();
router.get('/AllChildren',getAllChildren);
router.get('/OneChild/:idchild',getOneChild);
router.post('/children',addChild);
router.put('/children/:idparent',editChild);
router.delete('/children/:idChild',deleteOneChild);


module.exports = router;