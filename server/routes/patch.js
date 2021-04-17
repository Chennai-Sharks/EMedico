const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('../models/User.js');

//Updates doctor details
router.patch('/:did', async (req, res) => {

  try {
    const id = req.params.did;
    const update = req.body;
    const options = {new: true};
    const Doc = await User.findByIdAndUpdate(id,update,options);
    res.json(Doc);
  } catch (err) {
    res.status(400).json({
      message: err
    });
  }

});

router.patch('/updatePatient/:did/:dpid', async (req,res) => {

  try {

    const patient = await User.findOneAndUpdate();
    res.json(Patient);

  } catch (err) {
    res.status(400).json({message: err});
  }
});

module.exports = router;
