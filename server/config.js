const serverConfig = {
    fileUpload: {
        limits: { fileSize: 50 * 1024 * 1024 }
    },

    mongodb: {
        uri: 'mongodb://localhost:27017/vpn-finder',
        options: {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false
        }
    }
}

module.exports = serverConfig;