const User = require('../Models/user.model');
const bcrypt = require('bcrypt');
const passport = require('passport');
module.exports.getAll = async (req, res) => {
	User.find({}, (err, users) => {
		res.json(users);
	});
};
module.exports.postData = async (req, res) => {
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: await bcrypt.hash(req.body.password, 10)
	});
	newUser.save(async (err) => {
    if(err) {
      console.log(err)
    }else{
		res.send(await User.find({}))}
	});
};
module.exports.putData = async (req, res) => {
	let user = await User.findById(req.params.id);
	user.name = req.body.name;
	user.email = req.body.email;
	// user.password = await bcrypt.hash(req.body.password, 10);
	user.save(async () => {
		res.json(await User.find({}));
	});
};
module.exports.deleteData = async (req, res) => {
	User.findByIdAndDelete(req.params.id, err => {
		res.json({ message: req.params.id+' deleted' });
	});
};
module.exports.login = (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/login'
	})(req, res, next);
};

module.exports.logout = (req, res)=>{
  req.logout();
  res.redirect('/');
}