
exports.up = (knex) => {
  return knex.schema.createTable('defects', table => {
    table.increments('id')
    table.integer('home_id')
    table.string('trade')
    table.string('defect_name')
    table.string('defect_description')
    table.timestamp("date_logged").notNullable().defaultTo(knex.fn.now())
    table.string('status')
    table.string('image_path')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('defects')
}
