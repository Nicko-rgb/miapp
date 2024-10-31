const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:nick9090@localhost:5432/mydata',{
    logging: false
})

module.exports=sequelize