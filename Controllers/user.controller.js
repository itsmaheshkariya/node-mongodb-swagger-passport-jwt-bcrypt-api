
const User = require("../Models/user.model")
module.exports.getAll = async (req,res)=>{
   User.find({},(err,users)=>{
        res.json(users)
    })
  
}
module.exports.post = async (req,res)=>{
  let newUser = new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  })
  newUser.save(async ()=>{
      res.send(await User.find({}))
  })
}
module.exports.put = async (req,res)=>{
  let user = await User.findById(req.params.id)
    user.name=req.body.name;
    user.email=req.body.email;
    user.password=req.body.password;
    user.save(()=>{
        res.json(user)
    })
}
module.exports.delete = async (req,res)=>{
    User.findByIdAndDelete(req.params.id,(err)=>{
        res.json({'message':'deleted'})
    })
}