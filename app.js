const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb://localhost/xlx';

const app = express();

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',()=>{
    console.log('connected....')
})
app.use(express.json())
const insuranceRouter = require('./routers/insurances');

app.use('/insurances',insuranceRouter);

app.listen(9000,()=>{
    console.log('Server started');
})