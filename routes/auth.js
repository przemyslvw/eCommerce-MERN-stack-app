const express = require("express");
const jwt = require("jsonwebtoken");
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
    const { username, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("send");
  }
);

module.exports = router;
