const express = require('express');
const app = express();


app.use(express.static("public"));
app.use("/static",express.static("public"));
app.get('', inicio);
  
function inicio(peticion,resultado){
    resultado.send(__dirname + "/index.html");
}
app.listen(5050);