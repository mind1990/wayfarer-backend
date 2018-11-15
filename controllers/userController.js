const db = require('../models');
const User = db.User;

// Find all
const index = (req, res) => {
	User.find({}, (err, allUsers) => {
		if (err) throw err;
		res.json(allUsers);
	});
};

// Find by id
const show = (req, res) => {
	User.findById(req.params.id, (err, thatOneUser) => {
		if (err) throw err;
		res.json(thatOneUser);
	});
};

// Create
const create = (req, res) => {
	User.create(req.body, (err, newUser) => {
		if (err) throw err;
		res.json(newUser);
	});
};

// Edit
const update = (req, res) => {
	User.findOneAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedUser) => {
			if (err) throw err;
			res.json(updatedUser);
		}
	);
};

// Delete
const destroy = (req, res) => {
	User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
		if (err) throw err;
		res.json({ msg: 'deleted' });
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy
}








