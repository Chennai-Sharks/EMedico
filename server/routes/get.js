const router = require('express').Router();
const User = require('../models/User');

//this is to display all doctors
router.get('/',async (req,res) => {

  try{
    const allDocs = await User.find();
    res.json(allDocs);
  } catch(err) {
    res.status(400).send("No doctors fuck you");
  }

});


//this block of code is to display all the patients inside a particular doctor
router.get('/getPatients/:did', async (req, res) => {

  try {
    let allPatients = await User.findById(req.params.did);
    allPatients = allPatients.patients;
    if(allPatients.length === 0)
      res.status(400).send("There are no patients to display");
    else res.json(allPatients);
  } catch (err) {
    res.status(400).send("Invalid ID");
  }

});

//this block of code is to display all the patient details under a doctor
router.get('/:did', async (req, res) => {

  try {
    const allDocs = await User.findById(req.params.did);
    res.json(allDocs);
  } catch (err) {
    res.status(400).send("Invalid ID");
  }

});

//this is to get a particular patient under a particular doctor
router.get('/getOnePatient/:did', async(req,res) => {

  try{
    let allPatients = await User.findById(req.params.did);
    allPatients = allPatients.patients;
    for(i in allPatients){
      if(allPatients[i].dpid == req.body.dpid)
        res.json(allPatients[i]);
    }
  } catch(err) {
    res.status(400).send(err);
  }

});



module.exports = router;
