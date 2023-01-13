const db = require("../../database");



const getParent =(req,res)=>{
    const query=`SELECT * FROM parent`;
    db.query(query,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result)
        }
    });

}

const addParent = (req,res)=>{
    const {
        body: { idparent, name, age, adresse,email,password,image,phone,creditCard,role },
      } = req;
const query = `INSERT INTO parent (idparent, name, age, adresse,
     email, password, image, phone, creditCard, role)
      VALUES ('${idparent}', '${name}', ${age}, '${adresse}', '${email}',
       '${password}', '${image}',${phone},${creditCard}, '${role}');`;

    db.query(query,(err,result)=>{
        
        if(err){
            console.log(err);
        }
        res.send(result)
    });
};
const editParent=(req,res)=>{
    const {params:{idparent},
        body: {name, age, adresse,email,password,image,phone,creditCard,role },
      } = req;
      
      const query=`UPDATE parent SET name = '${name}',
       age = '${age}',adresse='${adresse}',email='${email}',
       password='${password}',image='${image}',phone='${phone}',
       creditCard='${creditCard}',role='${role}' WHERE idparent = '${idparent}';`
    //    console.log(query,"query");
    //    console.log(req.params,"req.params");
    //    console.log(req.body,'req.body');
        db.query(query,(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send(' you are updated sucessfully')
            }
        })
}

const deleteParent =(req,res)=>{
    const {params: {idparent}
}= req;
const query = `DELETE FROM parent WHERE idparent='${idparent}'`;

db.query(query, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send("you deleted it");
      console.log("you deleted it");
    }
  });
}


module.exports={addParent,editParent,getParent,deleteParent}