const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/wayfarer-backend', { useNewUrlParser: true });

module.exports = {
	User: require('./User'),
	Post: require('./Post')
};