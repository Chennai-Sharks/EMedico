const router = require('express').Router();
const User = require('../models/User');

//to GET all the details of a particular doctor
router.get('/', async (req, res) => {
	try {
		const allDocs = await User.findById(req.user._id);
		res.json(allDocs);
	} catch (err) {
		res.status(400).send('Invalid ID');
	}
});

// to DELETE a doctor from db 
router.delete('/',async (req,res)=>{
    try {
        const del = await User.findByIdAndDelete(req.user._id)
        res.status(200).send(del)
    } catch (err) {
        res.status(400).send(err)
    }
});
router.patch('/schema',async (req, res)=>{
	try {
		await User.updateMany({},{dash:{
			fungus:{
				complaints:{
					e:0,
					n:0,
					m:0,
					f:0
				},
				covid:{ y:0 , n:0 },
				diabetes:{ y:0 , n:0 },
				immuno_comp:{ y:0 , n:0 },
				steriods:{ y:0 , n:0 },
				hospitalized:{ y:0 , n:0 },
				ventilation:{ y:0 , n:0 }
			}
		}})
		res.send("User schema updated!!")
	} catch (error) {
		res.send({message:error})
	}
})
//Updates doctor details
router.patch('/', async (req, res) => {

    try {
      const id = req.user._id;
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