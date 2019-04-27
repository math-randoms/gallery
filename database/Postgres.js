// CREATE DATABASE gallery

// CREATE TABLE galleries (ID SERIAL PRIMARY KEY, location VARCHAR(30), title VARCHAR(30), urls text[]);
// const Pool = require('pg').Pool;

const Sequelize = require('sequelize');

const connection = new Sequelize('gallery', 'Annie', '', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    timestamps: false
  },
  logging: false,
  pool: { maxConnections: 20, maxIdleTime: 30 }
});

connection
  .authenticate()
  .then(() => console.log('Connected to PSQL'))
  .catch(error => console.log(error));

module.exports = connection;
