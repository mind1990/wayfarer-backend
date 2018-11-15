const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const postRouter = require('./config/api/post/routes');
const userRouter = require('./config/api/user/routes');



//--------------- Middleware ------------------//

// CORES(Cross Origin Resource Sharing)
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
		);
	next();
});

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// HTML endpoints
app.get('/', (req, res) => res.send('Hello world'));

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);

app.use('/api/user/:user_id', userRouter);
app.use('/api/post/:post_id', postRouter);



app.listen(port, () => console.log(`Server started on port ${port}`));