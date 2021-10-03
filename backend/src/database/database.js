const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost:27017/degosh',
	{ useNewUrlParser: true },
	{ useUnifiedTopology: true }
);