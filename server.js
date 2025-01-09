require("dotenv").config()
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.listen(3000, () => {
    console.log("Running on 3000 cups of coffee");
    console.log(`The secret is: ${process.env.SECRET_PASSWORD}`);
});