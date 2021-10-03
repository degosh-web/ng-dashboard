const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');
const discordUser = require('../models/discordUser');

passport.serializeUser((user, done) => {
	console.log('Serializing user');
	console.log(user);
	done(null, user.id);
});

passport.deserializeUser( async (id, done) => {
	console.log('Deserializing user');
	const user = await discordUser.findById(id);
	if (user) {
		done(null, user);
	}
});

passport.use(new DiscordStrategy({
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	callbackURL: process.env.CLIENT_REDIRECT,
	scope: ['identify', 'guilds', 'email']
}, async (accessToken, refreshToken, profile, done) => {
	try {
		const user = await discordUser.findOne({ discordId: profile.id });
		if (user) {
			console.log('User exists');
			done(null, user);// this serializes the user and attaches to 'req'
		} else {
			console.log('User does not exist');
			const newUser = await discordUser.create({
				discordId: profile.id,
				username: profile.username,
				email: profile.email,
				avatar: profile.avatar,
				discriminator: profile.discriminator
			});
			const savedUser = await newUser.save();
			done(null, savedUser);// same here, but user gets created according to schema
		}
	} catch(err) {
		console.log(err);
		done(err, null);
	}
}));