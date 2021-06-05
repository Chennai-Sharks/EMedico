const router = require('express').Router();
const User = require('../models/User');
const crypto = require('crypto');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const sendEmail = (user,token) => {
	var Transport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user:'neodemy2020@gmail.com',
			pass: process.env.PASS
		}
	})
	let mailOptions;
	let sender = 'EMedico';
	mailOptions = {
		from : sender,
		to : user.email,
		subject : " Email verification",
		html: ` <html>
					<head>
						<style>
						</style>
					</head>
					<body>
						<p>Hi ${user.name},</p>
						<p> Please, click the link below to verify your email</p>
						<a href="https://localhost:4000/api/users/verify/${token}">Reset Password</a>
					</body>
				</html>`
	}

	Transport.sendMail(mailOptions,(error,res)=>{
		if(error) 
			console.log(error)
		else
			console.log("Email sent!")
	})
}

//register auth route
router.post('/register', async (req, res) => {
	//this block of code is to check if the email doesn't already exists in the db
	const emailExist = await User.findOne({
		email: req.body.email,
	});
	if (emailExist) return res.status(400).send('Email already exists');

	//this block of code is to hash the password and store the hashed password in the database
	const salt = await bcryptjs.genSalt(10);
	const hashedPassword = await bcryptjs.hash(req.body.password, salt);
	const emailToken = crypto.randomBytes(64).toString('hex');
	//this block of code is to create a new user
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		emailToken: emailToken,
		isVerified: false,
		password: hashedPassword,
	});
	try {
		const savedUser = await user.save();
		sendEmail(user,emailToken)
		res.status(200).send({
			userId: savedUser._id,
			name: savedUser.name,
			email: savedUser.email,
		});
	} catch (err) {
		res.status(400).send({
			message: err,
		});
	}
});

//login auth route
router.post('/login', async (req, res) => {
	//this block of code is to check if the user has registered already by checking for it in the DB
	const user = await User.findOne({
		email: req.body.email,
	});
	if (!user) return res.status(404).send({message:'Email not found'}); //if the email entered isn't found in the DB

	//if(!user.isVerified) return res.status(400).send("Please confirm your email to login");

	//this block of code checks the corresponding password is right for that particular email
	const validPassword = await bcryptjs.compare(
		req.body.password,
		user.password
	);
	if (!validPassword) return res.status(401).send({message:'Invalid password'});

	//create and assigning the tokens
	const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
	res.header('auth_Token', token);
	res.status(200).send({ _id: user._id });
});

router.get('/verify/:token', async(req,res)=>{
	const user = await User.findOneAndUpdate({ emailToken: req.params.token }, { isVerified: true },{useFindAndModify:false});
	if(!user)
	res.status(400).send({message:"User not found"});
	else
	res.status(200).send({message:"Email verified"});     // add redirect 
})
module.exports = router;
