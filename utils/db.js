const { Sequelize, DataTypes } = require("sequelize");
const User = require("../models/users");
const sequelize = require("../config/sequelize");

const onConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Sequelize Connected db");
  } catch (error) {
    console.log("erroor DB: ", error);
  }
};

module.exports = onConnect;
