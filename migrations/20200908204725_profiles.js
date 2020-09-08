
exports.up = (knex) => {
  return knex.schema.createTable('profiles', table => {
    table.increments('id')
    table.integer('user_id')
    table.integer('home_ids')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('profiles')
}
