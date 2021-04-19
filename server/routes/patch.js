const router = require('express').Router();
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

router.patch('/updatePatient/:did/:mongoid', async (req,res) => {

  try {

    doc = await User.findById( req.params.did).exec();
    i=0;
    for ( i = 0; i < doc.patients.length; i++) {
      if (doc.patients[i].id == req.params.mongoid)
      {
        doc.patients[i]= { _id : req.params.mongoid , ...req.body};
        doc = await doc.save();
        break;
      }
    }
    res.send(doc.patients[i]);

  } catch (err) {
    res.status(400).json({message: err});
  }
});

module.exports = router;
