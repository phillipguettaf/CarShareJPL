
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bookings', function(t) {
  	t.increments('id').primary()
  	t.datetime('start')
    t.datetime('end')
  	t.string('email')
  	t.string('rego')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bookings')
};
