const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const moment = require("moment")



const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const pass = require('./Config/passport-config');
pass.initPassport(passport);
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))
mongoose.connect(
	'mongodb+srv://munnas:0000@cluster0.8ugu3.mongodb.net/mahesh?retryWrites=true&w=majority',
	{
		useUnifiedTopology: true,
		useNewUrlParser: true
	}
);
var db = mongoose.connection;

// db.on('error',(err)=>{
//   console.log(err)
// })
// db.once('open',(result)=>{
// console.log(result)
// })

const app = express();

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan(':method :url :status'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./Routes/user.route'));

app.listen(process.env.PORT,()=>{
  console.log(process.env.PORT)
});
