const { default: mongoose, connect } = require("mongoose");

const connectToDB = async() => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to database")
    } catch (error) {
        console.error('Not connected to Database : ', error)
    }
}

module.exports = connectToDB;