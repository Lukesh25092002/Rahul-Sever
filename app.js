const express = require("express");
const app = express();
app.use(express.json());

app.get("/home",function(req,res){
    res.sendFile("yyy.html",{root: __dirname});
})

app.listen(80,function(){
    console.log("The serrver is started")
});
