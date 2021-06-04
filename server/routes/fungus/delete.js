const router = require('express').Router();
const User = require('../../models/User');
const fsection1 = require('../../models/fungus/section1');


router.delete('/patient/:did', async (req, res)=>{

    try {
        // deleting the patient from doctor collection
        const doc = await User.findOne({ _id : req.params.did});
        doc.fPatients.id( req.body.mongoid).remove();
        const del = await doc.save();

        // deleting from sections      //Deletes all the sections in one go   //Smart move nanba by Nikhilesh        
          const deleted = await fsection1.findOneAndDelete({ mongoid: req.body.mongoid });
          const fdel = await deleted.save();
          console.log(fdel);  

          res.status(200).send("Patient deleted");
        
    } catch (err) {
        res.status(400).send(err)
    }
});

module.exports = router;
