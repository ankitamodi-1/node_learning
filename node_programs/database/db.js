const { default: mongoose } = require("mongoose");

async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017/nodejs_demo");
}

module.exports = connectDB;
