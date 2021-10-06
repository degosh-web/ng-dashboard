const express = require('express');
const router = express.Router();

const discordUser = require('../models/discordUser');

//get all users 
router.get('/users', (req, res, next) => {
	discordUser.find(function(err, users) {
		res.json(users);
	});
});

module.exports = router;

//37:30 - остальные реквесты