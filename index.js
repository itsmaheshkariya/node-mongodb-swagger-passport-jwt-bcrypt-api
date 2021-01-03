const express = require('express');
const morgan = require('morgan');
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://munnas:0000@cluster0.8ugu3.mongodb.net/munnas?retryWrites=true&w=majority",{
  useUnifiedTopology: true,
  useNewUrlParser:true
})
var db = mongoose.connection

const app = express();
app.use(morgan(':method :url :status'));
app.use('/', require('./Routes/user.route'));

app.listen(8080);
