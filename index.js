const express = require('express');
const app = express();

app.get('/', function(req, res){
    console.log('hello.');
    return res.send('running this code from app.js file');
});

app.get('/home', (req, res)=>{
    console.log('in home');
    let x = 400;
    return res.status(200).send(`home url ${x}`);
});

app.listen(8000, ()=>{
    console.log('listening to port 8000...');
});