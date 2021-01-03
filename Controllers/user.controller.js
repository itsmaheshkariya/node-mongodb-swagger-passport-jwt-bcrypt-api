
const User = require("../Models/user.model")
module.exports.getAll = async (req,res)=>{
  res.send(await User.find({}))
}