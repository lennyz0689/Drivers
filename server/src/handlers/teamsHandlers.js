const { createTeam } = require('../controllers/teamsController')

const postHandlerTeams = async (req, res) => {
    try {
        const { name } = req.body
        const newTeam = await createTeam(name)
        res.status(201).json(newTeam)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    postHandlerTeams
}