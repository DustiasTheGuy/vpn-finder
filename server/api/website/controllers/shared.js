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

let createFile = (file, url, removeAfter) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./public/assets/files/" + file.name, file.data, (err) => {
            if(err) {
                reject({
                    success: false,
                    err: err,
                    data: null
                });
            };

            if(removeAfter) {
                setTimeout(() => { // remove the files after 20 minutes

                    try {
                        fs.unlink("./public/assets/files/" + file.name);    
                    
                    } catch(err) {
                        console.log(err);
                        console.log(`${file.name} has most likely already been removed`);
                    };
    
                }, 1000 * 1200); // 10 min
            };

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