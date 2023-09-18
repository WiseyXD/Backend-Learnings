const mongoose = require("mongoose");
exports.connectDB = () => {
	mongoose
		.connect("mongodb://0.0.0.0:27017/Passport")
		.then((e) => console.log(`MongoDB Connected ${e.connection.host}`))
		.catch((err) => console.log("Error occured" + err));
};

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		reqired: true,
	},
	username: {
		type: String,
		reqired: true,
		unique: true,
	},
	password: {
		type: String,
		reqired: true,
	},
});

exports.User = mongoose.model("Users", userSchema);
