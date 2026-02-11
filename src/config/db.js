const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //This tries to connect using the Key in your.env files
        const conn = await mongoose.connect(process.env.MONGO_URI);

        //If succesful, it prints the host name
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }   catch (error) {
        //If it fails, it shows the error and stops the server
        console.error(`error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;