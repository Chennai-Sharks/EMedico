const router = require('express').Router();
const User = require('../models/User');
const crypto = require('crypto');
const Token = require('../models/Token');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const sendEmail = (user,token,option) => {
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
		subject : "Password reset",
		html: `<html>
        <head>
            <style>
            </style>
        </head>
        <body>
            <p>Hi ${user.name},</p>
            <p>You requested to reset your password.</p>
            <p> Please, click the link below to reset your password</p>
            <a href="https://localhost:4000/api/users/password/reset/${user.id}/${token}">Reset Password</a>
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

router.get('/request/:did', async(req, res)=>{
    const user = await User.findById(req.params.did)
    if(!user) res.status(400).send({message:"User not found"})

    let token = await Token.findOne({userId:req.params.did})
    if(token) token.deleteOne();

    let resetToken = crypto.randomBytes(32).toString("hex");
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcrypt.hash(resetToken, salt);
    await new Token({
        userId: req.params.did,
        token: hash,
        createdAt: Date.now()
    }).save();
  
    sendEmail(user,resetToken)
    res.send({message:"Email sent"})
})

router.get('/reset/:did/:token',async(req, res)=>{
    const passwordResetToken = await Token.findOne({ userId:req.params.did })
    if(!passwordResetToken)
        {
            console.log("Invalid/expired token")
            res.status(404).send({message:"invalid/expired token" })
        }

    const isValid = await bcrypt.compare(req.params.token, passwordResetToken.token)
    if(!isValid) 
        {
            console.log("Invalid token or expired password token")
            res.status(400).send({message:"Invalid token"})
        }

    const salt = await bcryptjs.genSalt(10);
    const hash = await bcrypt.hash(req.body.password,salt)
    await User.updateOne({ _id:req.params.did },{ $set:{ password:hash } })

    await passwordResetToken.deleteOne()
 //   res.redirect()  // add redirect url   
})
module.exports = router