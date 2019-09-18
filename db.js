const mongoose = require("mongoose");

//Bring in the .env file with Database credentials so we don't need to push them to github
require("dotenv").config();

// You can see what node counts as your "process.env"
console.log(process.env);

// Db connection string
const db = `mongodb+srv://${process.env.USER_DB}:${process.env.DB_PW}@cluster0-iugix.mongodb.net/NewOne?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    });
    console.log("We connected to the DB, waahoo!");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
