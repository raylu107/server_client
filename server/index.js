const express=require('express');
const port=3000;
const router=require('./routes');
const logger = require('morgan');
const createError = require('http-errors');

const app=express();
app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use('',router);

app.use(function(req, res, next) {
    next(createError(404));
  });

app.listen(port,()=>{
    console.log(`server listen on ${port}`);
})

module.exports = {app};
