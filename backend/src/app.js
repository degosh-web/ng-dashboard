require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const DiscordStrategy = require('./strategies/discordStrategy');
const db = require('./database/database'); //our mongoose connection
const path = require('path');
const mongoose = require('mongoose');

db.then(() => console.log('Connected to MongoDB.')).catch(err => console.log(err));
//Routes
const authRoute = require('./routes/auth');
const dashMainRoute = require('./routes/dash-main');
const requestsRoute = require('./routes/requests');

//Initializations
app.use(session({
	secret: 'random secret',
	cookie: {
		maxAge: 60000 * 60 * 24
	},
	saveUninitialized: false,
	resave: false,
	name: 'discord-oauth2',
	//store: new MongoStore({ mongooseConnection: mongoose.connect }) <- outdated i guess
	//mongodb://localhost:27017/degosh
	store: MongoStore.create({
		mongoUrl: 'mongodb://localhost:27017/degosh'
	})
}));
app.use(passport.initialize());
app.use(passport.session());

//Middleware
app.use('/auth', authRoute);
app.use('/dash-main', dashMainRoute);
app.use('/requests', requestsRoute);

app.listen(PORT, ()=> {
	console.log(`Listening to requests on port ${PORT}`);
});

/**
 * npm run dev - dev script with nodemon
 */