const User = require('../../models/user');
const shared = require('../../../website/controllers/shared');

module.exports = (req, res) => {
    User.findOne({_id: req.auth}, (err, document) => {
        if(err) {

        } else if(!document) {

        } else {
            const file = req.files.file;
            file.name = `${file.md5}.${shared.ext(file.mimetype)}`
            shared.createFile(file, req.headers.host, false)
            .then(response => {
                if(response.success) {  
                    document.imageURL = `${file.md5}.${shared.ext(file.mimetype)}` 
                    User.updateOne({_id: document._id}, document, (err, raw) => {
                        if(err) {

                        };

                        res.json({
                            success: true,
                            data: document.imageURL
                        });
                    });
                };
            });
        };
    });
};