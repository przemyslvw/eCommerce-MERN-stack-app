const express = require("express");
const User = require("../modules/User");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const router = express.Router();

router.post(
  "/register",
  [
    check("username", "Username is empty")
      .not()
      .isEmpty(),
    check("email", "Email is empty")
      .not()
      .isEmpty(),
    check("password", "Password is empty")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    // obsługa błędów
    try {
      const { username, email, password } = req.body;
      let user = await User.findOne({ email });
      const errors = validationResult(req);
      // warunek jeśli dany email istnieje
      if (user) {
        return res.status(401).json({ msg: "User already exist" });
      }
      // warunek jeśli pola nie wypełnione
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // tworzenie nowego użytkownika
      user = new User({
        email,
        password,
        username
      });
      // szyfrowanie hasła
      let salt = await bcryptjs.genSalt(5);
      user.password = await bcryptjs.hash(password, salt);

      // zapis  do bazy
      await user.save();

      res.send("send");
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "Server error ..." });
    }
  }
);

module.exports = router;
