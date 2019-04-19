const knex = require('knex')(require('./knexfile'))

module.exports = {
  getCars (user) {
    console.log(`Getting cars...`)
    return knex.select().from('cars')
  }
}