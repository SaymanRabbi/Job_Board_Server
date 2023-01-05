const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');


// Connect to MongoDB
export const connectDB =  () => {
    try {
        const conn =  mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (err) {
        console.error(`Error: ${err.message}`.red);
        process.exit(1);
    }
}