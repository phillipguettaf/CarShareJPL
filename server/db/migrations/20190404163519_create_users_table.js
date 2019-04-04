
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (t) {
  	t.string('email').primary()
  	t.string('firstname')
  	t.string('lastname')
  	t.integer('age')
  	t.float('latitude', 9, 7)
  	t.float('longitude', 9, 7)
  	t.string('licencenumber')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
