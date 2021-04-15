const router = require('express').Router();
const User = require('../models/User');
const Section1 = require('../models/section1');
const Section4 = require('../models/section4');

router.post('/:did', async (req,res) =>{

    //checks if patient ID already exists
    var patient = await User.findOne({ _id: req.params.did   });
    patient = patient.patients;
    for(var i=0 ;i<patient.length;i++)      
    if( patient[i].dpid == req.body.dpid)
    return res.status(400).send("Patient ID already exists");

    try{
        const doc = await User.findOne({ _id : req.params.did});
        doc.patients.push({ name: req.body.name , dpid : req.body.dpid });
        savedPatient = doc.save();
        res.send({...savedPatient});
    }
    catch (err){
        res.status(400).send({message: err});
    }
});

module.exports = router;
