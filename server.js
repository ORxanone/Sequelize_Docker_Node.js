require("dotenv").config();
const express = require("express");
const cors = require("cors");

// const router = require("./routers/router");
const User = require("./models/users");

//CONNECT DB
const onConnect = require('./utils/db')
const sequelize = require('./config/sequelize')
sequelize.sync({alter: true})

const app = express();
// const router = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.SERVER_PORT || 5000;

// app.use(require('./routers/router'))

app.use(
  cors({
    origin: "*",
  })
);
onConnect()
app.get("/", async (req, res) => {
  res.send("Hello Express!");
});

app.post("/registration", async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const existUser = await User.findOne({ where: { email } });
    if (existUser) {
      res.status(400).send({ message: "Email alrady exist" });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    console.log("user Createeee: ", user);

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    console.log('buraa LOGIIIIN', email, password)
    const user = await User.findOne({ where: { email, password } });
    if(!user){
        res.status(400).send({message: "Email or Password is wrong"})
    }
    res.status(200).send(user)
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
