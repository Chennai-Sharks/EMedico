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
      dash: {
        fungus: {
          complaints: {
            e: 0,
            n: 0,
            m: 0,
            f: 0,
          },
          covid: { y: 0, n: 0 },
          diabetes: { y: 0, n: 0 },
          immuno_comp: { y: 0, n: 0 },
          steriods: { y: 0, n: 0 },
          hospitalized: { y: 0, n: 0 },
          vaccination: { y: 0, n: 0 },
        },
      },
    });
    try {
      const savedUser = await user.save();
      const token = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET, {
        expiresIn: '2h',
      });
      let exp = new Date();
      exp.setHours(exp.getHours() + 2);

      res.status(200).send({
        did: savedUser._id,
        jwt: token,
        exp: exp,
      });
    } catch (err) {
      res.status(400).send({
        message: 'Authentication failed',
      });
    }
  } else {
    try {
      const token = jwt.sign(
        { _id: emailExist._id },
        process.env.TOKEN_SECRET,
        {
          expiresIn: '2h',
        }
      );
      let exp = new Date();
      exp.setHours(exp.getHours() + 2);
      res.status(200).send({
        did: emailExist._id,
        jwt: token,
        exp: exp,
      });
    } catch (err) {
      res.status(400).send({
        message: 'Authentication failed',
      });
    }
  }
});

module.exports = router;
