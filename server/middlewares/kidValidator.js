const {body} = require("express-validator");

//Validator for checking values while creation or updation of a kid
exports.createKid = [
  body("name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name field cannot be empty!")
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "Name field must contain minimum 3 letters and maximum 100 letters!"
    )
    .isAlpha("en-US", { ignore: " " })
    .withMessage(
      "Name field cannot contain any numbers or special characters!"
    ),

  body("username")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Username field cannot be empty!")
    .isLength({ min: 3, max: 20 })
    .withMessage("Usename field must contain minimum 3 letters and maxmimum 20 letters!")
    .isAlphanumeric()
    .withMessage("Username field can only contain alphabets & numbers!"),

  body("age")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password field cannot be empty!")
    .isStrongPassword()
    .withMessage(
      "Password must be atleast 8 characters long & must include- one uppercase letter, one lowercase letter, one special character, one digit!"
    ),
]
