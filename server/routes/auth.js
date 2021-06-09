const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

//register auth route
router.post('/login', async (req, res) => {
	//this block of code is to check if the email doesn't already exists in the db
	const emailExist = await User.findOne({
		email: req.body.email,
	});
	if (!emailExist) {

		//this block of code is to create a new user
		const user = new User({
			userId: req.body.userId,
			name: req.body.name,
			email: req.body.email,
		});
		try {
			const savedUser = await user.save();
			const token = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET);
			res.status(200).send({
				did: savedUser._id,
				jwt: token 
			});
		} catch (err) {
			res.status(400).send({
				message: err,
			});
		}
	}
	else{
		const token = jwt.sign({_id: emailExist._id}, process.env.TOKEN_SECRET);
		res.status(200).send({
			did: emailExist._id,
			jwt: token 
		});
	}
});

module.exports = router;
