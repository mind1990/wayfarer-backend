const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: String,
	password: { type: String, required: true },
	firstname: String,
	lastname: String,
	email: { type: String, required: true },
	currentcity: String,
	datejoin: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;