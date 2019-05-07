exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('memes', table => {
    table.increments('id')
      .primary()
    table
      .string('url')
      .notNull()
      .unique()
  })
}

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('memes')])
    .catch(error => console.log(error.detail))
}
