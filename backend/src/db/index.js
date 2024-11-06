const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const URLSchema = new mongoose.Schema({
  url: String,
  shortURL: String,
});

const URLs = mongoose.model("URL", URLSchema);
module.exports = {
  URLs,
};
