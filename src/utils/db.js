const mongoose = require('mongoose');

const connectToDB = async (url) => {
    await mongoose.connect(url, {
        dbName: 'characters',
        connectTimeoutMS: 10000,
    });
    console.log('Connected to MongoDB');
};

module.exports = connectToDB;