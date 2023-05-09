

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





app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


