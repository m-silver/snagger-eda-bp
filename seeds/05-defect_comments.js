
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('defect_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('defect_comments').insert([
        {id: 1, defect_id: 1, comment: 'it looks like the tap has been damaged by someone?'},
        {id: 2, defect_id: 2, comment: 'we have booked the electrician for Monday 10am'},
        {id: 3, defect_id: 3, comment: 'all finished, let us know if we can sign it off'},
      ])
    })
}
