
exports.seed = function(knex) {
  return knex('monsters').insert([
    {
      id: "1356c302-23a4-4fc7-b799-8fd721004b0f",
      mystery_id: "e8c995c5-1abb-4135-b092-9fe67a4d1ab8",
      monster_type_id: "91469c06-4a7e-456c-87a4-c57f68c70daf",
      minion_type_id: null,
      name: "Bubbles",
      description: "She's so perky!",
      harm_capacity: 9,
    },
    {
      id: "803ba7fb-ab49-4a2a-a6d7-7b6a60b55e87",
      mystery_id: "e8c995c5-1abb-4135-b092-9fe67a4d1ab8",
      monster_type_id: "83efb49d-5ce0-4f16-b46f-41946409c8da",
      minion_type_id: "4837c4ea-0885-421b-9b47-f8baff767f63",
      name: "Fizz",
      description: "She's so zippy!",
      // harm_capacity: "7",
    },
  ]);
};
