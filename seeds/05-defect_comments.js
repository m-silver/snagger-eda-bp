
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('defect_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('defect_comments').insert([
        {id: 1, defect_id: 1, comment: 'it looks like the tap has been damaged by someone?'},
        {id: 2, defect_id: 2, comment: 'we have booked the electrician for Monday 10am'},
        {id: 3, defect_id: 3, comment: 'all finished, let us know if we can sign it off'},
        {id: 4, defect_id: 4, comment: 'we looked but couldn\'t find the stain, could you be more specific please?'},
        {id: 5, defect_id: 4, comment: 'it is just to the left of the kitchen island'},
        {id: 6, defect_id: 4, comment: 'oh now I see it thanks!'},
      ])
    })
}
