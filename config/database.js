const mongoose = require("mongoose");
const config = require("config");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.get("mongoURI"), {
      useFindAndModify: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDb is connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
