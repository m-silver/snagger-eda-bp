
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('defects').del()
    .then(function () {
      // Inserts seed entries
      return knex('defects').insert([
        {
          id: 1, 
          home_id: 1,
          trade: 'plumbing',
          defect_name: 'tap leaking',
          defect_description: 'water keeps dripping, even when shut off fully',
          date_logged: knex.fn.now(),
          status: 'logged',
          image_path: ''
        },
        {
          id: 2, 
          home_id: 2,
          trade: 'electrical',
          defect_name: 'sticky light switch',
          defect_description: 'sometimes the switch gets stuck in and we have to use a knife to jiggle loose',
          date_logged: knex.fn.now(),
          status: 'in progress',
          image_path: ''
        },
        {
          id: 3, 
          home_id: 3,
          trade: 'painting',
          defect_name: 'mark in paint',
          defect_description: '',
          date_logged: knex.fn.now(),
          status: 'complete',
          image_path: ''
        }
      ])
    })
}
