const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get("/",(req,res) =>{
    res.send("Hi This is Home Route")
})

app.listen(port, () => {
    console.log(`Localhost are runing on ${port}`)
})