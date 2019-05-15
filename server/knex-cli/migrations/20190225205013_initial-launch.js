exports.up = function(knex, Promise) {
  return knex.schema.alterTable('users', table => {
    table.increments('id')
      .primary()

    table
      .string('username')
      .notNull()
      .unique()

    table
      .string('email')
      .notNull()
      .unique()

    table.string('password')
      .notNull()

    table.boolean('emailVerified')
      .default(false)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn('users')
}
