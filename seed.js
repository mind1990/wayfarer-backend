const db = require('./models/index');

const User = db.User;
const Post = db.Post;

const seed = [
	{
		username: 'kenny',
		password: 'brock',
		firstname: 'kenneth',
		lastname: 'bushman',
		email: 'irockkennybrock@gmail.com',
		currentcity: 'San Francisco',
		datejoin: ''
	}
]

//Remove
User.deleteMany({}, err => {
	if (err) throw err;
	console.log('User deleted');
	//create new
	//end with process.exit() unless it causes issues then remove and exit manually
	User.create(seed, (err, newUser) => {
		if (err) throw err;
		console.log(`Created user: ${newUser}`);
		process.exit();
	});
});


// Dont forget to run node seed.js in terminal