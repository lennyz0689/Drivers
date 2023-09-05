const { createDriver } = require("../controllers/driversControllers")

const getHandlerDrivers = (req, res, next) => {
    const { name } = req.query
    if (name === undefined) {
        res.status(200).send('este endpoint es para los Drivers')
    }
    else {
        res.status(200).send(`informacion del nombre ${name}`)
    }
}

const getHandlerDriverid = (req, res, next) => {
    const { id } = req.params
    res.status(200).send(`esta es el detalle de Driver con el id ${id}`)
}

const postHandlerDriver = async (req, res, next) => {
    try {
        const { name, lastName, description, image, nationality, datebirth } = req.body
        const newDriver = await createDriver(name, lastName, description, image, nationality, datebirth)
        res.status(201).json(newDriver)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    getHandlerDriverid,
    getHandlerDrivers,
    postHandlerDriver
}