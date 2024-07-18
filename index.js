const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres', 'postgres', "mysecretpassword",  {
    host: 'localhost',
    dialect: "postgres",
})

const onConnect =async() =>{
    try {
        await sequelize.authenticate()
        console.log("postgres Connected")
    } catch (error) {
        console.log('error postgres: ', error)
    }
}

onConnect()