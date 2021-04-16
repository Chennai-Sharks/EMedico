const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('../models/User.js');

//Updates doctor details
router.patch('/:did', async (req, res) => {

  try {
    const id = req.params.did;
    const updates = req.body;
    const options = {new: true};
    const Doc = await User.findByIdAndUpdate(id,updates,options);
    res.json(Doc);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

module.exports = router;
