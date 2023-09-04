require("dotenv").config();
 const dbURL= process.env.DB_URL; 

const mongoose = require("mongoose");
 
const dbConnection = async()=>{
    try {
        const conn = await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log(`MongoDB connected:${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error:${error.message}`.red.bold)
        process.exit()
    }
}

module.exports = dbConnection;