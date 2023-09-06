const axios = require("axios");
const server = require("./src/server");
const { sequelize } = require('./src/db.js');
const PORT = 3001;

sequelize.sync({ alter: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
