require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('./strategies/discordStrategy');
const db = require('./database/database');
const path = require('path');

db.then(() => console.log('Connected to MongoDB.')).catch(err => console.log(err));
//Routes
const authRoute = require('./routes/auth');
const dashMainRoute = require('./routes/dash-main');

//Initializations
app.use(session({
	secret: 'random secret',
	cookie: {
		maxAge: 60000 * 60 * 24
	},
	saveUninitialized: false,
	name: 'discord-oauth2'
}));
app.use(passport.initialize());
app.use(passport.session());

//Middleware
app.use('/auth', authRoute);
app.use('/dash-main', dashMainRoute);

app.listen(PORT, ()=> {
	console.log(`Listening to requests on port ${PORT}`);
});

/**
 * npm run dev - dev script with nodemon
 */