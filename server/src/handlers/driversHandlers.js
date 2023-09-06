const { createDriver, searchDriver, getAllDrivers, getDriverName } = require("../controllers/driversControllers")

const getHandlerDrivers = async (req, res) => {
    const { name } = req.query
    try {
        if (name === undefined) {
            res.status(200).json(await getAllDrivers())
        }
        else {
            res.status(200).json(await getDriverName(name))
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getHandlerDriverid = async (req, res) => {
    const { id } = req.params
    let type = ''
    if (isNaN(id)) {
        type = 'database'
    } else {
        type = 'api'
    }
    try {
        const driver = await searchDriver(id, type)
        res.status(200).json(driver)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const postHandlerDriver = async (req, res) => {
    const { name, lastName, description, image, nationality, datebirth } = req.body
    try {
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