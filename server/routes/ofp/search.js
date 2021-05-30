const router = require('express').Router();
const User = require('../../models/User');

// search route 'query' is the search input
router.get('/:did/:query', async(req, res)=>{

    await User.aggregate([
         // matching the doctor document
         {
             $match:  { _id: req.params.did } //mongoose.Types.ObjectId("6076c7c4a9ee3e09e0c23a60") }
         },

         //unwind the patients array
         { "$unwind": "$ofpPatients"},

         //using match to filter the matching patients
         { "$match":{
                 "$or":[
                     { "ofpPatients.name": {"$regex": req.params.query.toString() , "$options": "i" } },
                     { "ofpPatients.dpid": {"$regex": req.params.query.toString() , "$options": "i" } }
                 ]
         }},

         // patients array is put back together
         {
             $group: {
                 "_id": "$_id",
             //  "name":{ "$first": "$name" },  // syntax for adding non array type fields
                 "ofpPatients":{ "$push": "$ofpPatients"},
             }
         }

      ]).exec(function (err, result) {
         if (err) return res.status(400).send(err);
         res.send(result[0].ofpPatients);
       });
});

module.exports = router;