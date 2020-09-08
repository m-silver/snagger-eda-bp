
exports.up = (knex) => {
  return knex.schema.createTable('homes', table => {
    table.increments('id')
    table.integer('user_id')
    table.string('address')
    table.string('floorplan_image_path')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('homes')
}
