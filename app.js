const express = require("express");
const app = express();
app.use(express.json());

app.get("/home",function(req,res){
    // res.send({
    //     message: "This is Home page",
    //     descroiption: "This is made only for testing"
    // });

    res.sendFile("yyy.html",{root: __dirname});
})

app.listen(80,function(){
    console.log("The serrver is started")
});
