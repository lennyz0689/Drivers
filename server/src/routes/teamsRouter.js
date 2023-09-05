const { Router } = require('express')
const teamsRouter = Router()

teamsRouter.get('/', (req, res, next)=>{
    res.status(200).send('este endpoint es para los teams')
})

module.exports = teamsRouter