exports.seed = function (knex) {
  return knex("monster_weaknesses").insert([
    {
      id: "f5e605ee-27b9-45d0-81e4-c03aee3c9c3a",
      monster_id: "1356c302-23a4-4fc7-b799-8fd721004b0f",
      name: "Sharp things",
      description: "Causes Bubble to use Pop attack before dying instantly."
    },
    {
      id: "367081f2-0c7d-4582-95cf-fa2cd5f7f6a9",
      monster_id: "803ba7fb-ab49-4a2a-a6d7-7b6a60b55e87",
      name: "Shaking it up",
      description: "Prevents Fizz from using Carbonate, but doubles damage of Cacophony."
    },
  ]);
};
