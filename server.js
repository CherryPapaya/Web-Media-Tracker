const express = require("express")
const app = express()

// app.set('view engine', 'ejs')

// app.get("/", (req, res) => {
//   console.log("Hello there")
//   res.send(":3")
// })

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000)