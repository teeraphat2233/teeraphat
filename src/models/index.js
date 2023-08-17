module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        status: DataTypes.STRING,
        type: DataTypes.STRING
    })
    return User
}
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const config = require('../config/config')

const db = {}
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs.readdirSync(dirname)
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = require(path.join(dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model
    })
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db