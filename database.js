require('dotenv').config();
const { Sequelize } = require('sequelize');

// Connect using the DATABASE_URL from the .env file
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false // Disable SQL query logging if you don't need it
});

module.exports = sequelize;
