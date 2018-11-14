const Sequelize = require('sequelize')
const sequelize = require('../db')

const Company = sequelize.define('companies', {
  name: {
    type: Sequelize.STRING,
    field: 'name',
    allowNull: false
  },
  foundingYear: {
    type: Sequelize.INTEGER,
    field: 'founding_year',
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    field: 'description',
    allowNull: true
  }
})

module.exports = Company