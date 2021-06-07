const router = require('express').Router();
const User = require('../../models/User.js');
const Section1 = require('../../models/fungus/section1');

//this is to update patient details under a doctor
// // router.patch('/updatePatient/:did/:mongoid', async (req,res) => {

// //   try {
// //     doc = await User.findById( req.params.did).exec();
// //     for ( i = 0; i < doc.fPatients.length; i++) {
// //       if (doc.fPatients[i]._id == req.params.mongoid)
// //       {
// //         doc.fPatients[i]= { _id : req.params.mongoid , ...req.body};
// //         doc = await doc.save();
// //         break;
// //       }
// //     }
// //     res.send(doc.fPatients[i]);

// //   } catch (err) {
// //     res.status(400).json({message: err});
// //   }
// });

//this is to update the section 1 details
router.patch('/section1/:did/:mongoid', async (req,res) => {
  try {
    const conditions = {mongoid: req.params.mongoid};
    const update = req.body;
    const options = {new: true, useFindAndModify: false};
    const section1doc = await Section1.findOneAndUpdate(conditions,update,options);

    doc = await User.findById( req.params.did).exec();
    for ( i = 0; i < doc.fPatients.length; i++) {
      if (doc.fPatients[i]._id == req.params.mongoid)
      {
        doc.fPatients[i]= { 
                        	_id : req.params.mongoid,
                            name:req.body.name, 
                            dpid: req.body.dpid 
                          };
        doc = await doc.save();
        break;
      }
    }
    res.send(section1doc);
  } catch(err){
    res.status(400).json({message: err});
  }
});

module.exports = router;
