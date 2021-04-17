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

router.patch('/updateOnePatient/:did', async (req,res) => {

  try {
/*
    let allPatients = await User.findById(req.params.did);
    allPatients = allPatients.patients;
    let patientID = 0;
    for(i in allPatients){
      if(allPatients[i].dpid == req.params.dpid)
        patientID = allPatients[i]._id;
      } */
    const id = req.params.did;
    const update = req.body;
    const options = {new: true};
    const patient = await User.findByIdAndUpdate(id,update,options);
    res.json(Patient);

  } catch (err) {
    res.status(400).json({message: err});
  }
});

module.exports = router;
