
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {id: 1, user_id: 1, home_id: 2001},
        {id: 2, user_id: 2, home_id: 2002},
        {id: 3, user_id: 3, home_id: 2003},
      ])
    })
}
