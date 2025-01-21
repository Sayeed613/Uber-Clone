const mongoose = require('mongoose');


function connectToDb() {
    mongoose.connect(process.env.MONGODB_URL
    ).then(() => {
        console.log('Connected to Data base ');
    }).catch(err => console.log(err));
}


module.exports = connectToDb;