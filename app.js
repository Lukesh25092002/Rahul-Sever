const express = require("express");
const app = express();
app.use(express.json());

app.get('/myendpoint', (req, res) => {
    res.sendFile(`${__dirname}/test.html`);
  });

app.listen(80,function(){
    console.log("The serrver is started")
});
