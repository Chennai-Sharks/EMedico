const router = require('express').Router();
const User = require('../../models/User');
const Section1 = require('../../models/fungus/section1');

router.post('/addPatient/:did', async (req, res) => {
	//checks if patient ID already exists
	var patient = await User.findOne({ _id: req.params.did });
	patient = patient.fPatients;
	for (var i = 0; i < patient.length; i++)
		if (patient[i].dpid == req.body.dpid)
			return res.status(400).send('Patient ID already exists');

	//adds patient detail to
	try {
		const doc = await User.findOne({ _id: req.params.did });
		doc.fPatients.push({ name: req.body.name, dpid: req.body.dpid });
		savedPatient = await doc.save();
		res.send(savedPatient.fPatients.pop());
	} catch (err) {
		res.status(400).json({ message: err });
	}
});

router.post('/section1/:mongoid', async (req, res) => {
	// add section1 data to db
	const sec = new Section1({ mongoid: req.params.mongoid, ...req.body });

	try {
		const savedSection = await sec.save();
		res.send(savedSection);
	} catch (err) {
		res.status(400).send({ message: err });
	}
});

module.exports = router;
