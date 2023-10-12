const express = require('express')
var bodyParser = require('body-parser')
const mysql = require("mysql");
const index  = express()
index.use(express.json());
const cors = require('cors')
index.use(cors())
const db = mysql.createConnection({

  host:'localhost',
  database:'todolist',
  user:'root',
  password:'password123'

});

db.connect(function(error){

if (error){
    console.log("Error connecting to database");
}else{
    console.log("successfully connected!!")
}
})
 index.listen(5000, function(){
    console.log("app is listening to 5000")
  });

  index.post("/api/tasks/add",(req,res) =>{
   let details = {
    title : req.body.title,

   };
    let sql = "INSERT INTO tasks SET ?";
    db.query(sql,details,(error)=>{
    if(error)
    {
        console.log(error)
        res.send({status:false,message: "Task created Failed"});
    }
    else{
        res.send({ status: true,message:"Task created successfully"});
    }
    });
});
index.get("/api/tasks",(req,res)=>{
  var sql = "SELECT * FROM tasks";
  db.query(sql,function(error,result){
    if(error){
      console.log(error);
      res.send(error)
    }else{
      res.send({status:true,data:result})
    }
  });
});

index.put("/api/tasks/update/:id",(req,res)=>{
  let sql= "UPDATE tasks SET title='"+
  req.body.title + "'WHERE id="+req.params.id;

  let query = db.query(sql,(error,result)=>{
    if(error){
      res.send({status:false,message:"UPDATED FAILED :("})
    }else {
      res.send({status:true,message:"UPDATED SUCCESSFULLY HURRAY! :)"})
    }
  });
});

index.delete("/api/tasks/delete/:id",(req,res)=>{
  console.log(req.params.id)
  let sql = "DELETE FROM tasks WHERE id=" + req.params.id+"";
  let query = db.query (sql,(error)=>{
    if(error){
      res.send(error)
    } else{
      res.send({status:true,message:"DELETED SUCCESSFULLY :)"})
    }
  })
})