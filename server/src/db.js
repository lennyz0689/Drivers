const { Sequelize } = require("sequelize");
const DriverModel = require('./models/Driver')
const TeamModel = require('./models/Team')
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: false,
  native: false,
});

DriverModel(sequelize)
TeamModel(sequelize)

const { Driver, Team } = sequelize.models

Driver.belongsToMany(Team, { through: 'DriversTeams' })
Team.belongsToMany(Driver, { through: 'DriversTeams' })



module.exports = {
  sequelize,
  ...sequelize.models
}