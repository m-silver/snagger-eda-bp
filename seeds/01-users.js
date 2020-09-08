
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'testuser1', password: 'testpassword1'},
        {id: 2, username: 'testuser2', password: 'testpassword2'},
        {id: 3, username: 'testuser3', password: 'testpassword3'}
      ])
    })
}
