exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('categories', table => {
    table.increments('id')
      .primary()
    table.string('name')
      .notNull()
  })
}

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('categories')])
    .catch(error => console.log(error.detail))
}
