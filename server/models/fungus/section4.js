const mongoose = require('mongoose');

const section4Schema = new mongoose.Schema({
	mongoid: String,
    "surgicalPlan":[String]
});

module.exports = mongoose.model('fSection4', section4Schema);
