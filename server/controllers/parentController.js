require("dotenv").config();
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Parent = require("../config/db").parent;

//POST method to create a new parent
exports.register = async (req, res) => {
  //Handle errors coming from signup validator middleware
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, email, password } = req.body;

    //Check if email already exists in the database
    const existingParent = await Parent.findOne({ where: { email: email } });

    if (existingParent) {
      return res.status(403).json({
        err: "User already exists! Try logging in or sign up with different credentials.",
      });
    }

    //Hash the password before storing it in database
    const encryptedPassword = await bcrypt.hash(password, 10);

    //Save the parent in database with hashed password
    const newUser = await Parent.create({
      name: name,
      email: email,
      password: encryptedPassword,
    });

    return res.status(201).json({ msg: "User created successfully!" });
  } catch (err) {
    return res
      .status(500)
      .json({ err: "Something has went wrong. Please try again later!" });
  }
};

//POST method to login an existing parent
exports.login = (req, res) => {
  res.send("Not implemented");
};
