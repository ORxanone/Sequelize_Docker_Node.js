// user üçün əgər registration, login tələb olunsa .. burada yazilacaq

require("dotenv").config();
const router = require("express").Router();

const User = require("../models/users");

router.post("/", async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const existUser = await User.findOne({where: {email}});
    console.log("Salalalallammm: ", existUser)
  } catch (error) {
    req.status(500).send({ message: error.message });
  }
});
