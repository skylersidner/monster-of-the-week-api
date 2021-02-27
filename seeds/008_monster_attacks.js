exports.seed = function (knex) {
  return knex("monster_attacks").insert([
    {
      id: "4aa20b01-5fc9-4eab-81b6-0202f90fc2e8",
      monster_id: "1356c302-23a4-4fc7-b799-8fd721004b0f",
      name: "Pop",
      description: "Explode in a rainbow of color!",
      harm: 2
    },
    {
      id: "751728f2-9222-4045-acca-2cc54e5bbf6f",
      monster_id: "803ba7fb-ab49-4a2a-a6d7-7b6a60b55e87",
      name: "Cacophony",
      description: "Expels a lot of carbon dioxide at once.",
      harm: 1
    },
  ]);
};
