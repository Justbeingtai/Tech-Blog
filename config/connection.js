const Sequelize = require('sequelize');
require('dotenv').config();

// Set up the database connection
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
  }
);

module.exports = sequelize;
