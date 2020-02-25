const express = require("express");
const app = express();
const connectToDatabase = require("./config/database");
connectToDatabase();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is working on port: ${PORT}`));
