const Product = require("./api/models/product");
const mongoose = require("mongoose");
let data = require("./products.json");

mongoose.connect('mongodb://localhost:27017/vpn-finder', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

let prioritized = [
    "Ivacy VPN",
    "PureVPN"
];

for(let i = 0; i < data.length; i++) {
    new Product({
        label: data[i].label,
        description: data[i].description,
        imageURL: data[i].imageURL,
        link: data[i].link,
        freeOption: data[i].freeOption,
        onSaleData: data[i].onSaleData,
        features: data[i].features,
        priority: prioritized.includes(data[i].label) ? true : false
    }).save(err => {
        if(err) {
            return console.log(err);
        } else {
            return console.log(`Saved: ${data[i].label}`);
        };
    });

    if(i === data.length - 1) {
        setTimeout(() => {
            mongoose.disconnect();
        }, 5000);
        
        console.log(`Saved ${data.length} products`);
    };
};

