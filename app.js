const express = require("express");
const app = express();
app.use(express.json());

app.get('/home', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
  });

app.listen(80,function(){
    console.log("The serrver is started")
});
