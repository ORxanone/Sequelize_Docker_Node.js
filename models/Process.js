
const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");


const Process = sequelize.define('Process_task', {
    id: {
        tyoe: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    process_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    process_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    process_criticality: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// sequelize.sync({alter: true})

module.exports = Process

