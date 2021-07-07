const router = require('express').Router();
const User = require('../../models/User');
const Section1 = require('../../models/fungus/section1');
const Section2 = require('../../models/fungus/section2');
const Section3 = require('../../models/fungus/section3');
const Section4 = require('../../models/fungus/section4');

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
		res.status(400).json({ message : 'Invalid Input' });
	}
});

router.post('/section/:mongoid', async (req, res) => {
  var doctor = await User.findOne({ _id: req.user._id });
  dash = doctor.dash;
  fungus = doctor.dash.fungus;
  section1 = req.body.section1;
  if (section1.recentCovid == 'yes') fungus.covid.y++;
  else fungus.covid.n++;

  if (section1.diabetesMellitus == 'yes') fungus.diabetes.y++;
  else fungus.diabetes.n++;

  if (section1.immunocompromised == 'yes') fungus.immuno_comp.y++;
  else fungus.immuno_comp.n++;

  if (section1.longtermSteriods == 'yes') fungus.steriods.y++;
  else fungus.steriods.n++;

  if (section1.hospitalizedHomecare == 'Hospitalized') fungus.hospitalized.y++;
  else if (section1.hospitalizedHomecare == 'Home care')
    fungus.hospitalized.n++;

  if (section1.vaccination == 'None') fungus.vaccination.n++;
  else fungus.vaccination.y++;

  dash.fungus = fungus;
  // add section1 data to db
  const sec1 = new Section1({
    mongoid: req.params.mongoid,
    ...req.body.section1,
  });
  const sec2 = new Section2({
    mongoid: req.params.mongoid,
    ...req.body.section2,
  });
  const sec3 = new Section3({
    mongoid: req.params.mongoid,
    ...req.body.section3,
  });

  try {
    await User.findByIdAndUpdate(
      req.user._id,
      { dash: dash },
      { useFindAndModify: false }
    );
    await sec1.save();
    await sec2.save();
    await sec3.save();
    res.send('Data added');
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: 'Failed to add. Try again' });
  }
});

router.post('/section4/:mongoid', async (req, res) => {
  const sec4 = new Section4({
    mongoid: req.params.mongoid,
    ...req.body,
  });
  try {
    await sec4.save();
    res.send('Data added');
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: 'Failed to add. Try again.' });
  }
});
module.exports = router;
