
exports.seed = function(knex) {
  return knex('bystanders').insert([
    {
      id: "3977a063-317f-419b-b974-93f40801a2c8",
      mystery_id: "e8c995c5-1abb-4135-b092-9fe67a4d1ab8",
      bystander_type_id: "c110dd37-9a67-411a-8e42-653c62586ed8", // Skeptic
      name: "Ed",
      description: "Grandpa",
    },
    {
      id: "8498ab02-44f7-4dce-941a-34d85880fc05",
      mystery_id: "e8c995c5-1abb-4135-b092-9fe67a4d1ab8",
      bystander_type_id: "370aad6a-339c-48e4-80c5-c87772d631a6", // Gossip
      name: "Nada",
      description: "Grandma",
    },
  ]);
};
