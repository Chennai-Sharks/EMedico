const router = require('express').Router();
const User = require('../../models/User');
const Section1 = require('../../models/ofp/section1');

//this block of code is to display all ofp-patients inside a particular doctor
router.get('/getPatients/:did', async (req, res) => {
	try {
		let allPatients = await User.findById(req.params.did);
		allPatients = allPatients.ofpPatients;
		if (allPatients.length === 0)
			res.status(400).send('There are no patients to display');
		else res.json(allPatients);
	} catch (err) {
		res.status(400).send('Invalid ID');
	}
});

//this is to get a particular patient under a particular doctor
router.get('/getOnePatient/:did/:mongoid', async (req, res) => {
	try {
		let allPatients = await User.findById(req.params.did);
		allPatients = allPatients.ofpPatients;
		for (i in allPatients) {
			if (allPatients[i]._id == req.params.mongoid) res.json(allPatients[i]);
		}
	} catch (err) {
		res.status(400).send(err);
	}
});

// this is to GET the details of section 1
router.get('/section1/:mongoid', async (req, res) => {
	try {
		let data = await Section1.findOne({ mongoid: req.params.mongoid }).exec();
		let allPatients = await User.findById(req.headers.did);
		allPatients = allPatients.ofpPatients;
		for (i in allPatients) {
			if (allPatients[i]._id == req.params.mongoid) {
				if (data)
					res.json({
						name: allPatients[i].name,
						dpid: allPatients[i].dpid,
						...data._doc,
					});
				else res.status(404).json({ message: 'No patient.' });
				break;
			}
		}
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

module.exports = router;
