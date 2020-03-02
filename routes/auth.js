const express = require("express");
const User = require("../modules/User");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const config = require("config");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

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
      .isEmail()
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

      let payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      //  res.send("send");
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "Server error ..." });
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Email is empty")
      .not()
      .isEmail(),
    check("password", "Password is empty")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    // obsługa błędów
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });
      const errors = validationResult(req);
      // warunek jeśli dany email istnieje
      if (!user) {
        return res.status(401).json({ msg: "Email not exist" });
      }
      // warunek jeśli pola nie wypełnione
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      let isMatch = await bcryptjs.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ msg: "Password is invalid" });
      }

      await user.save();

      let payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "Server error ..." });
    }
  }
);

module.exports = router;
