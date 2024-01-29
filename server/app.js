require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT

const config = require("./config/serverConfig");

const router = require("./routes/Index.routes");

config(app);
app.use("/api", router);

app.listen(PORT, (req, res) => {
    console.log(`This server on ${PORT}`);
})