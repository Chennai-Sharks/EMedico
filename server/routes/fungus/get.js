const router = require('express').Router();
const User = require('../../models/User');
const Section1 = require('../../models/fungus/section1');
const Section2 = require('../../models/fungus/section2');
const Section3 = require('../../models/fungus/section3');

router.get('/dashboard', async (req,res)=>{
	try {
		let user = await User.findById(req.user._id);
		res.send({
			recent : user.fPatients.slice(-3), 
			noOfPatients : user.fPatients.length,
			dash : user.dash.fungus
		})	
	} catch (error) {
		res.status(400).send({ message:error});
	}
});

//this block of code is to display all ofp-patients inside a particular doctor
router.get('/getPatients', async (req, res) => {
	try {
		let allPatients = await User.findById(req.user._id);
		allPatients = allPatients.fPatients;
		if (allPatients.length === 0)
			res.status(400).send({message:'There are no patients'});
		else res.json(allPatients);
	} catch (err) {
		res.status(400).send('Invalid ID');
	}
});

//this is to get a particular patient under a particular doctor
router.get('/getOnePatient/:mongoid', async (req, res) => {
	try {
		let allPatients = await User.findById(req.user._id);
		allPatients = allPatients.fPatients;
		for (i in allPatients) {
			if (allPatients[i]._id == req.params.mongoid) 
				res.json(allPatients[i]);
		}
	} catch (err) {
		res.status(400).send(err);
	}
});

// this is to GET the details of section 1
router.get('/section1/:mongoid', async (req, res) => {
	try {
		let data = await Section1.findOne({ mongoid: req.params.mongoid }).exec();
		// let allPatients = await User.findById(req.user._id);
		// allPatients = allPatients.fPatients;
		// for (i in allPatients) {
		// 	if (allPatients[i]._id == req.params.mongoid) {
				if (data)
					res.json({
						// name: allPatients[i].name,
						// dpid: allPatients[i].dpid,
						...data._doc,
					});
				else res.status(404).json({ message: 'No patient.' });
			// 	break;
			// }
		// }
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

router.get('/section2/:mongoid', async (req, res) => {
	try {
		let data = await Section2.findOne({ mongoid: req.params.mongoid }).exec();
		if (data)
			res.json({
				...data._doc,
			});
		else res.status(404).json({ message: 'No patient.' });
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

router.get('/section3/:mongoid', async (req, res) => {
	try {
		let data = await Section3.findOne({ mongoid: req.params.mongoid }).exec();
		if (data)
			res.json({
				...data._doc,
			});
		else res.status(404).json({ message: 'No patient.' });
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

module.exports = router;