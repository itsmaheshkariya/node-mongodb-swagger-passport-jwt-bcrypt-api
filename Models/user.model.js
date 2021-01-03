const mongoose = require("mongoose")
const { Schema } = mongoose;
module.exports.User = mongoose.model('User', new Schema({
  name: String,
  email: String,
  password: String
}))
