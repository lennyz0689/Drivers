const { getHandlerDrivers, getHandlerDriverid, postHandlerDriver } = require('../handlers/driversHandlers')
const { Router } = require('express')
const driversRouter = Router()

driversRouter.get('/', getHandlerDrivers)

driversRouter.get('/:id', getHandlerDriverid)

driversRouter.post('/', postHandlerDriver)



module.exports = driversRouter