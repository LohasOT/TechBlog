const { Sequelize } = require('sequelize')

module.exports = new Sequelize(process.env.NODE_ENV === 'production' ? process.env.JAWSDB_URL : 'mysql://root:Lohas199312!@localhost:3306/blog_db')