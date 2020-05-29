const express = require("express");
const app = express();
const cors = require('cors');
const connectToDatabase = require("./config/database");
const PORT = process.env.PORT || 5000;

//Dodanie cors, aby móc wykonywać żądania
app.use(cors());

app.use(
  express.json({
    extended: false
  })
);

app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/booktables", require("./routes/bookTable.js"));
app.use('/api/basket', require('./routes/basket'));

connectToDatabase();

app.listen(PORT, () => console.log(`Server is working on port: ${PORT}`));
