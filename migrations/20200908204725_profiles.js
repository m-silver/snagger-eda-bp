
exports.up = (knex) => {
  return knex.schema.createTable('profiles', table => {
    table.increments('id')
    table.integer('user_id').references('users.id')
    table.integer('home_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('profiles')
}
