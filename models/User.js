const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: String,
	password: String,
	firstname: String,
	lastname: String,
	currentcity: String,
	datejoin: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;