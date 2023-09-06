const { Driver } = require('../db')
const axios = require('axios')

const cleanApi = (data) => {
    const arr = Array.isArray(data) ? data : [data];
    return arr.map(element => {        
        return {
            id: element.id,
            name: element.name.forename,
            lastName: element.name.surname,
            description: element.description,
            image: element.image.url,
            nationality: element.nationality,
            datebirth: element.dob
        }
    })
}

const createDriver = async (name, lastName, description, image, nationality, datebirth) => {
    return await Driver.create({ name, lastName, description, image, nationality, datebirth })
}

const searchDriver = async (id, type) => {
    if (type === 'api') {
        const driversApi = (await axios.get(`http://localhost:5000/drivers/${id}`)).data
        const driversAllApi = cleanApi(driversApi)
        return [...driversAllApi]
    } else {
        return await Driver.findByPk(id)
    }
}

const getAllDrivers = async () => {
    const driversAllDatabase = await Driver.findAll()
    const driversApi = (await axios.get('http://localhost:5000/drivers')).data
    const driversAllApi = cleanApi(driversApi)
    return [...driversAllDatabase, ...driversAllApi]
}

const getDriverName = async (name) => {
    const driverDb = await Driver.findAll({ where: { name: name } })
    const driversApi = (await axios.get('http://localhost:5000/drivers')).data
    const driversAllApi = cleanApi(driversApi)
    const filterApi = driversAllApi.filter((driver) => {
        return driver.name === name
    })

    return [...driverDb, ...filterApi]
}

module.exports = {
    createDriver,
    searchDriver,
    getAllDrivers,
    getDriverName
}