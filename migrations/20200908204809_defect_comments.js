
exports.up = (knex) => {
  return knex.schema.createTable('defect_comments', table => {
    table.increments('id')
    table.integer('defect_id').references('defects.id')
    table.string('comment')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('defect_comments')
}
