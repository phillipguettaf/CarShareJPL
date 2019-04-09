
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bookings', function(t) {
  	t.increments('id').primary()
  	t.timestamps()
  	t.string('email')
  	t.string('rego')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bookings')
};
