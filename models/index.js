const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jwtauth', { useNewUrlParser: true });

module.exports = {
	User: require('./User'),
	Post: require('./Post')
};