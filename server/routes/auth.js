const router = require('express').Router();
const User = require('../model/User');
const bcryptjs = require('bcryptjs');

router.post('/register', async (req, res) => {

//this block of code is to check if the email doesn't already exists in the db
  const emailExist = await User.findOne({email: req.body.email});
  if(emailExist) return res.status(400).send("Email already exists");

//this block of code is to hash the password and store the hashed password in the database
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(req.body.password, salt);

//this block of code is to create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  try{
    const savedUser = await user.save();
    res.send({userId: user._id});
  }catch(err){
    res.status(400).send({message:err});
    }
});

router.post('/login', async (req,res) => {
  const user = await User.findOne({email: req.body.email});
  if(!user) return res.status(400).send("Email not found");

  const validPassword = await bcryptjs.compare(req.body.password, user.password);
  if(!validPassword) return res.status(400).send("Invalid password");

  res.send("Logged IN!");
})


module.exports = router;
