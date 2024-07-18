require("dotenv").config()
const express = require('express');
const cors = require('cors');

//CONNECT DB
const onConnect = require('./utils/db')
const sequelize = require('./config/sequelize')
sequelize.sync({force: true})

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const PORT = process.env.SERVER_PORT || 5000


app.use(
    cors({
        origin: '*'
    })
)
onConnect()
app.get('/', async(req, res)=>{
    res.send('Hello Express!')
})


app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`)
})
