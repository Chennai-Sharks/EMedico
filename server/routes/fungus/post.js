const router = require('express').Router();
const User = require('../../models/User');
const Section1 = require('../../models/fungus/section1');
const Section2 = require('../../models/fungus/section2');
const Section3 = require('../../models/fungus/section3');

router.post('/addPatient', async (req, res) => {
	//checks if patient ID already exists
	var doctor = await User.findOne({ _id: req.user._id });
	try {
		if (!doctor) res.status(404).send({ message: 'No doctor available' });

		patient = doctor.fPatients;
		for (var i = 0; i < patient.length; i++)
			if (patient[i].dpid == req.body.dpid)
				return res.status(400).send({ message: 'Patient ID already exists' });

		//adds patient detail to
		doctor.fPatients.push({ name: req.body.name, dpid: req.body.dpid });
		savedPatient = await doctor.save();
		res.send(savedPatient.fPatients.pop());
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: err });
	}
});

router.post('/section/:mongoid', async (req, res) => {
	// add section1 data to db
	const sec1 = new Section1({
		mongoid: req.user.mongoid,
		...req.body.section1,
	});
	const sec2 = new Section2({
		mongoid: req.user.mongoid,
		...req.body.section2,
	});
	const sec3 = new Section3({
		mongoid: req.user.mongoid,
		...req.body.section3,
	});

	try {
		const savedSec1 = await sec1.save();
		const savedSec2 = await sec2.save();
		const savedSec3 = await sec3.save();
		res.send('Data added');
	} catch (err) {
		console.log(err);
		res.status(400).send({ message: err });
	}
});

module.exports = router;
