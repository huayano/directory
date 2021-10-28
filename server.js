const express = require('express');
const app = express();
const { findAll, insertData} = require ("./helpers/furniture");

app.use(express.json())

app.route('/show')
    .get(findAll)

app.post('/create', function (req, res) {
    insertData(req.body, res);
})



app.listen(4402, function(){
    console.log('Api start')
})
