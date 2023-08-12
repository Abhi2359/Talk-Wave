const dbURL = "mongodb+srv://abhishek:abhishek2359@cluster0.exzk3st.mongodb.net/"


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