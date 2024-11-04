const mongoose = require("mongoose");

mongoose.connect("");

const URLSchema = new mongoose.Schema({
  url: String,
  shortURL: String,
});

const URLs = mongoose.model("URL", URLSchema);
module.exports = {
  URLs,
};
