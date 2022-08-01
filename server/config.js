require('dotenv/config');

const serverConfig = {
	fileUpload: {
		limits: { fileSize: 50 * 1024 * 1024 },
	},

	mongodb: {
		uri: process.env.MONGO_URI,
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		},
	},
};

module.exports = serverConfig;
