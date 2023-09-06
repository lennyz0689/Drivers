const { Team } = require('../db')

const createTeam = async (name) => await Team.create({ name })

module.exports = {
    createTeam
}