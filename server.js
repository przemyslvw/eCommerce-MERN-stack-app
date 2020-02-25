const express = require("express");
const app = express();
const connectToDatabase = require("./config/database");
const PORT = process.env.PORT || 5000;

app.use(
  express.json({
    extended: false
  })
);

app.use("/api/auth", require("./routes/auth.js"));

connectToDatabase();

app.listen(PORT, () => console.log(`Server is working on port: ${PORT}`));
