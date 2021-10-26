const express = require('express');
const app = express();
const { mainMethod } = require ("./server/yellowBook");

app.route('/')
    .get(mainMethod)


app.listen(4402, function(){
    console.log('Api start')
})
