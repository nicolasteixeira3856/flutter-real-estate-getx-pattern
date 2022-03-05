const express = require("express");
const app = express();
const router = require("./src/routes/router");
const path = require("path");
require("./src/database");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use('/public', express.static(path.join(__dirname, 'images')));

app.listen(process.env.SYSTEM_PORT, () => {
    console.log("Server is running at localhost: ", process.env.SYSTEM_PORT);
});

module.exports = app;