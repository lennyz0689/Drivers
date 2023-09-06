const { Router } = require('express')
const { postHandlerTeams } = require('../handlers/teamsHandlers')
const teamsRouter = Router()

teamsRouter.post('/', postHandlerTeams)

module.exports = teamsRouter