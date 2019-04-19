
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', function (t) {
  	t.string('rego').primary()
  	t.string('make')
  	t.string('model')
  	t.integer('year')
  	t.float('latitude', 9, 7)
  	t.float('longitude', 9, 7)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cars')
};
