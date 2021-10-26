const express = require('express');
const app = express();
const { findAll, insertOne} = require ("./helpers/furniture");

app.route('/show')
    .get(findAll)

app.route('/create')
    .get(insertOne)


app.listen(4402, function(){
    console.log('Api start')
})
