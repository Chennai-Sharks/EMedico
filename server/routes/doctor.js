const router = require('express').Router();
const User = require('../models/User');

//to GET all the details of a particular doctor
router.get('/:did', async (req, res) => {
	try {
		const allDocs = await User.findById(req.params.did);
		res.json(allDocs);
	} catch (err) {
		res.status(400).send('Invalid ID');
	}
});

// to DELETE a doctor from db 
router.delete('/:did',async (req,res)=>{
    try {
        const del = await User.findByIdAndDelete(req.params.did)
        res.status(200).send(del)
    } catch (err) {
        res.status(400).send(err)
    }
});

//Updates doctor details
router.patch('/:did', async (req, res) => {

    try {
      const id = req.params.did;
      const update = req.body;
      const options = {new: true, useFindAndModify: false};
      const Doc = await User.findByIdAndUpdate(id,update,options);
      res.json(Doc);
    } catch (err) {
      res.status(400).json({
        message: err
      });
    }
  
  });

module.exports = router;