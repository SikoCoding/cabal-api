const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config()
const app = express();


const connection = mysql.createConnection(process.env.DATABASE_URL)
app.use(cors())

app.get('/', function (req, res, next) {
    // res.json({msg: 'This is CORS-enabled for all origins!'})
    console.log("Hello World");
    res.send("Hello World")
})
app.get('/cabal',(req,res)=>{
    connection.query(
        'SELECT * FROM Status_id',
        function(err,results,fields){
            res.send(results);
        }
    )
});
app.listen(process.env.PORT || 3000);

