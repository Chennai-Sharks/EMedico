const router = require('express').Router();
const User = require('../models/User.js');
const Section1 = require('../models/section1');

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

//this is to update patient details under a doctor
router.patch('/updatePatient/:did/:mongoid', async (req,res) => {

  try {

    doc = await User.findById( req.params.did).exec();
    i=0;
    for ( i = 0; i < doc.patients.length; i++) {
      if (doc.patients[i]._id == req.params.mongoid)
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

//this is to update the section 1 details
router.patch('/section1/:did/:mongoid', async (req,res) => {
  try {
    const conditions = {mongoid: req.params.mongoid};
    const update = req.body;
    const options = {new: true, useFindAndModify: false};
    const section1doc = await Section1.findOneAndUpdate(conditions,update,options);
    res.send(section1doc);
  } catch(err){
    res.status(400).json({message: err});
  } // finally{
  //   doc = await User.findById( req.params.did).exec();
  //   i=0;
  //   for ( i = 0; i < doc.patients.length; i++) {
  //     if (doc.patients[i]._id == req.params.mongoid)
  //     {
  //       doc.patients[i]= { _id : req.params.mongoid , ...req.body};
  //       doc = await doc.save();
  //       break;
  //     }
  //   }
  // }
});

module.exports = router;
