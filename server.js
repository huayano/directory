const express = require('express');
const app = express();
const { findAll, insertData, updateData} = require ("./helpers/furniture");

app.use(express.json())

app.route('/show')
    .get(findAll)

app.post('/create', function (req, res) {
    insertData(req.body, res);
})

app.post('/add-item', function (req, res) {
    updateData(req.body, res)
})



app.listen(4402, function(){
    console.log('Api start')
})
