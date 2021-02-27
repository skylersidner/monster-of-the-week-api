exports.seed = function (knex) {
  return knex("monster_powers").insert([
    {
      id: "0acdd3d9-472b-4af3-984e-bbf26811ab45",
      monster_id: "1356c302-23a4-4fc7-b799-8fd721004b0f",
      name: "Twinkle",
      description: "React brightly in the sun."
    },
    {
      id: "3faf3f61-0759-4d51-bbac-b0c80b571af9",
      monster_id: "803ba7fb-ab49-4a2a-a6d7-7b6a60b55e87",
      name: "Carbonate",
      description: "Infuse your favorite beverage!"
    },
  ]);
};
