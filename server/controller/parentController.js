const db = require("../database");




const addParent = (req,res)=>{
    const query='INSERT INTO parent SET ?'
    const data=req.body
    db.query(query,data,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send(result)
    })
}
module.exports={addParent}