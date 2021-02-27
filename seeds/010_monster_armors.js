exports.seed = function (knex) {
  return knex("monster_armors").insert([
    {
      id: "c27ef739-0a4e-492f-902e-5a5d888329ea",
      monster_id: "1356c302-23a4-4fc7-b799-8fd721004b0f", // Bubbles
      name: "Wind resistance",
      description: "Blows gently in the wind.",
      is_magical: true
    },
    {
      id: "ddef487c-4068-4030-b980-905224304609",
      monster_id: "803ba7fb-ab49-4a2a-a6d7-7b6a60b55e87", // Fizz
      name: "Soda can",
      description: "Protects against rusting.",
      is_magical: false
    },
  ]);
};
