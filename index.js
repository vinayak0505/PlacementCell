const express = require('express');
const router = require('./routes');

const app = express();
const port = 8000;



// use express router
app.use('/',router);

app.listen(port, function (err) {
    if(err){
        console.log('err: ', err);
        return;
    } 

    console.log('console is running on port ', port);
})