

const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const db= require("../server/database.mysql/index")

app.use(cors())
app.use(express.json())


  app.get("/get", (req, res) => {
  
    db.query("SELECT * FROM songs", (err, data) => {
      if (err) {
        console.log(err);
         res.send("err")
      }
      else{
      return res.send(data);
      }
    });
  });

  app.post("/post",(req,res)=>{
    const post =req.body; 
    console.log(post)
   db.query(`INSERT INTO songs (title,artist,audio,created_at,image) VALUES (?,?,?,?,?)`,[post.title,post.artist,post.audio,post.created_at,post.image],
    (error,  results) => {
      if (error) return res.send(error);
       res.send("added")
      });
  })


  app.post("/register",(req,res)=>{
    const post =req.body; 
    console.log(post)
   db.query(`INSERT INTO user (username,email,password) VALUES (?,?,?)`,[post.username,post.email,post.password],
    (error,  results) => {
      if (error) return res.send(error);
       res.send("added")
      });
  })

  app.post("/login",(req,res)=>{
    const post =req.body; 
    console.log(post)
   db.query(`SELECT * FROM user WHERE username= ? AND password= ?`,[post.username,post.password],
    (error,  results) => {
      if (error) {return set.encoding({error:error})}
       else{ 
         if (results.length>0){res.send(results)}
         else {res.send({message: "wrong username or password"})}
      }
      });
  })

  app.get("/user", (req, res) => {
  
    db.query("SELECT * FROM user", (err, data) => {
      if (err) {
        console.log(err);
         res.send("err")
      }
      else{
      return res.send(data);
      }
    });
  });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


