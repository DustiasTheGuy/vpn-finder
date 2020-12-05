const shared = require('../../../website/controllers/shared');

module.exports = (req, res) => {
    let promises = new Array();
    const files = req.files.File;

    console.log(files.length);
    if(files.length > 0) {

        files.forEach(file => {
            file.name = `${file.md5}.${shared.ext(file.mimetype)}`;
            promises.push(shared.createFile(file, req.headers.host, false));
        });
        
        Promise.all(promises)
        .then(result => 
        res.json({
            message: null,
            success: true,
            statusCode: 200,
            data: result
        }));

    } else {
        let file = files;
        file.name = `${file.md5}.${shared.ext(file.mimetype)}`;
        
        shared.createFile(file, req.headers.host, false)
        .then(result => {
            res.json({
                message: null,
                success: true,
                statusCode: 200,
                data: [result]
            });
        });
    };
};