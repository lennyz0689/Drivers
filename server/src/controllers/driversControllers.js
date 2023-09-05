const { Driver } = require('../db')

const createDriver = async (name, lastName, description, image, nationality, datebirth) => {
    return await Driver.create({ name, lastName, description, image, nationality, datebirth })
}

module.exports = {
    createDriver
}