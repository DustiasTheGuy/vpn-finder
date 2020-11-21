const fs = require("fs");

let ext = (mimetype) => {
    switch(mimetype) {
        case "image/jpeg": return "jpeg";
        case "image/jpg": return "jpg";
        case "image/png": return "png";
        case "text/plain": return "txt";
        default: "txt";
    };
};

let createFile = (file, url) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./public/assets/files/" + file.name, file.data, (err) => {
            if(err) {
                reject({
                    success: false,
                    err: err,
                    data: null
                });
            };

            setTimeout(() => { // remove the files after 20 minutes
                fs.unlink("./public/assets/files/" + file.name, (err) => {
                    if(err) {
                        console.log(err);
                    };
                });

            }, 1000 * 1200); // 10 min

            resolve({
                success: true,
                err: null,
                data:  url + "/assets/files/" + file.name
            });
        });
    });
};

module.exports = { 
    ext, 
    createFile 
};