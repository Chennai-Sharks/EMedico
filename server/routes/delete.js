const router = require('express').Router();
const User = require('../models/User');
const Section1 = require('../models/section1');
const Section4 = require('../models/section4');

router.delete('/patient/:did', async (req, res)=>{

    try {
        // deleting the patient from doctor collection 
        const doc = await User.findOne({ _id : req.params.did});
        doc.patients.id( req.body.mongoid).remove();
        const del = await doc.save();
        
        // // deleting from sections 
        // const deleted = await Section1.findOneAndDelete({ mongoid: req.body.mongoid });
        res.status(200).send(del);
    } catch (err) {
        res.status(400).send(err)
    }
});

router.delete('/doctor/:did',async (req,res)=>{
    try {
        const del = await User.findByIdAndDelete(req.params.did)
        res.status(200).send(del)
    } catch (err) {
        res.status(400).send(err)
    }
});

module.exports = router;