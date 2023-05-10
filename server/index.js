const express = require("express")
const app = express()
const PORT = 4000
const cors = require("cors")
const db = require("../server/database/index")

app.use(cors())
app.use(express.json())

app.get("/get", (req, res) => {
  db.query("SELECT * FROM songs", (err, data) => {
    if (err) {
      console.error(err)
     
    }
    return res.send(data)
  });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

