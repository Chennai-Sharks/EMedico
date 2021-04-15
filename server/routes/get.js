const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
/*
  try{
    const allDocs = await User.findById(req.params.did);
    res.json(allDocs);
  } catch(err){
    res.send("Invalid ID");
  }
*/

  try {
    const allPatients = await User.findOne({ _id: req.params.did });
  //  for(i in allPatients.patients)
    //  var allPatientsDetails = allPatients.patients[i];
    res.json(allPatients);
  } catch (err) {
    res.json({
      message: err
    });
  }

});

module.exports = router;
