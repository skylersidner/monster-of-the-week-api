exports.seed = function (knex) {
  return knex("countdowns").insert([
    {
      id: "9335a246-8471-48e9-894a-3251fd6494b1",
      mystery_id: "e8c995c5-1abb-4135-b092-9fe67a4d1ab8",
      day: "Everything's Peachy!",
      shadows: "Seems foreboding...",
      sunset: "Uh, it's getting kinda dark.",
      dusk: "Maybe we should go inside...?",
      nightfall: "I see something with teeth out there!",
      midnight: "Aaaaaah!",
    },
  ]);
};
