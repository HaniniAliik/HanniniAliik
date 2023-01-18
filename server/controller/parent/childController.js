const db = require("../../database");



const getOneChild =(req,res)=>{
    // const query=`SELECT * FROM child`;
    // db.query(query,(err,result)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         res.send(result)
    //     }
    // });

}
const getAllChildren =(req,res)=>{
 

}

const addChild = (req,res)=>{
    const {
        body: { 
            idChild:idchild,
            name, age,
             hobbies, educationLevel, 
            phone, gendre, 
            password, image,
            school, timeTable,
            }} = req
      const query = `INSERT INTO child (idchild, name, age, hobbies, educationLevel,
         phone, gendre, password, image, school, timeTable, 
         parent_idparent) VALUES ('${idchild}','${name}', '${age}', 
         '${hobbies}', '${educationLevel}', '${phone}', '${password}','${gendre}',
           '${image}', '${school}', '${timeTable}');`;

    db.query(query,(err,result)=>{
        
        if(err){
            console.log(err);
        }
        res.send(result)
    });
};



const editChild=(req,res)=>{

      }




const deleteOneChild =(req,res)=>{
    let idchild = req.params.idChild
    console.log("=============>", req.params);
    
    
    const query = `DELETE FROM child WHERE  idchild = ${idchild}`;
    db.query(query, (err, result) => {
        // if (err) {
        //     console.log(err);
        //     return res.status(500).send("Error deleting child");
        // }
        res.send(result);
    });
}


const deleteAllChildren =(req,res)=>{

}

module.exports={getOneChild,deleteOneChild,editChild,addChild,deleteAllChildren,getAllChildren}