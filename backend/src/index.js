const express = require("express");
const { URLs } = require("./db/index");

const app = express();
const PORT = 3000;
app.use(express.json());

async function RandomString() {
  const CHARACTERS =
    "ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 7; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
  }
  let urlDb = await URLs.findOne({
    shortURL: result,
  });
  if (urlDb) {
    return RandomString();
  } else {
    return result;
  }
}

app.post("/v1/api/generate", async (req, res) => {
  const body = req.body;
  if (req.body.url) {
    const urlDb = await URLs.findOne({
      url: req.body.url,
    });
    if (urlDb) {
      res.status(200).json({
        type: "Success",
        url: req.body.url,
        shortUrl: urlDb.shortURL,
      });
    } else {
      let shortUrl = await RandomString();
      const urlDb = await URLs.create({
        url: req.body.url,
        shortURL: shortUrl,
      });
      return res.status(200).json({
        type: "Success",
        url: req.body.url,
        shortUrl: urlDb.shortURL,
      });
    }
  } else {
    res.status(403).json({
      type: "Error",
      message: "Enter a valid URL",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running in Port ${PORT}`);
});