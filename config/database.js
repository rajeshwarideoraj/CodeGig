const { Sequelize } = require('sequelize');

module.exports = new Sequelize('codegig', 'root', 'Chahat1996@', {
    host: 'localhost',
    dialect:'mysql'
  });
