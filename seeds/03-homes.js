
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('homes').del()
    .then(function () {
      // Inserts seed entries
      return knex('homes').insert([
        {id: 1, user_id: 1, address: '20 Hastings Street', floorplan_image_path: '/images/floorplan1.png'},
        {id: 2, user_id: 2, address: '8 Isitt Road', floorplan_image_path: '/images/floorplan2.png'},
        {id: 3, user_id: 3, address: '19 Cochrane Road', floorplan_image_path: '/images/floorplan3.png'},
      ])
    })
}
