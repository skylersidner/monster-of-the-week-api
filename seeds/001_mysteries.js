exports.seed = function (knex) {
  return knex('mysteries').insert([
    {
      id: 'e8c995c5-1abb-4135-b092-9fe67a4d1ab8',
      name: 'Test Mystery',
      concept: 'This is some seed data.',
      hook: 'It will really hook you in!',
      overview: 'Check out how this seed data works...',
      notes: 'It clearly worked!',
    },
  ]);
};
