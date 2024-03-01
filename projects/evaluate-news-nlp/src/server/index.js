const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");

const APIKEY = "8f1c586c651c61d23a8299708ce65d8e";
const language = "es";

const app = express();

app.use(cors({ origin: "http://localhost:8080" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

app.post("/test", (req, res) => {
  const articleUrl = req.body.formText;
  console.log("Received data:", articleUrl);

  const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${APIKEY}&lang=${language}&url=${articleUrl}`;

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Received data from JSONPlaceholder:", responseData);
      res.json({
        message: "Data received and posted to JSONPlaceholder successfully!",
        data: responseData,
      });
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
