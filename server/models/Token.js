
const tokenSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "user",
	  },
	  token: {
		type: String,
		required: true,
	  },
	  createdAt: {
		type: Date,
		default: Date.now,
		expires: 1800, // this is the expiry time in seconds
	  },
})
module.exports = mongoose.model('Token', tokenSchema);