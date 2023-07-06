import { body } from "express-validator";

export const emailAndPasswordValidation = [
  body("email")
    .isString()
    .isEmail()
    .bail()
    .withMessage("Invalid email")
    .trim()
    .escape()
    .notEmpty(),
  body("password")
    .isString()
    .bail()
    .withMessage("Invalid password")
    .trim()
    .escape()
    .notEmpty(),
];
