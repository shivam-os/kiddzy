require("dotenv").config();
const {validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


//POST method to create a new parent
exports.register = (req, res) => {
  res.send("Not implemented");
};

//POST method to login an existing parent
exports.login = (req, res) => {
  res.send("Not implemented");
}
