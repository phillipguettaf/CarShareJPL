
exports.up = function(knex, Promise) {
  return knex.schema.createTable('licences', function (t) {
  	t.string('licencenumber').primary()
  	t.string('licencetype', 10)
  	t.string('state', 3)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('licences')
};
