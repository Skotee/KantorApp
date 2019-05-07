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

    table.boolean('twoFacAuthEnabled')
      .default(false)

    table.string('twoFacAuthToken')
      .notNull()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn('users')
}
