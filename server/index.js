const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database/index");
const childRoute = require('./routes/child/childRoute')
const app = express();
const PORT = 8000;

db.connect((err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log("Connected to db");
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/", require("./routes/parent/parentsRouter"));
app.use("/api/", require("./routes/parent/childRouter"));


app.use("/api", childRoute);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});