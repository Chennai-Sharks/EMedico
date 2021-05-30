const router = require('express').Router();
const User = require('../../models/User');
const Section1 = require('../../models/section1');


router.delete('/patient/:did', async (req, res)=>{

    try {
        // deleting the patient from doctor collection
        const doc = await User.findOne({ _id : req.params.did});
        doc.ofpPatients.id( req.body.mongoid).remove();
        const del = await doc.save();

        // deleting from sections      //Deletes all the sections in one go   //Smart move nanba by Nikhilesh
        let i=1;
        for(;i<=6;i++){
          var name = 'Section' + i;
          const deleted = await name.findOneAndDelete({ mongoid: req.body.mongoid });
        }
        res.status(200).send(del);
    } catch (err) {
        res.status(400).send(err)
    }
});

module.exports = router;
