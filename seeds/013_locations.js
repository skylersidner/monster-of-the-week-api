
exports.seed = function(knex) {
  return knex('locations').insert([
    {
      id: "90c0dedc-eb8c-435e-b00b-b43326e3e134",
      mystery_id: "e8c995c5-1abb-4135-b092-9fe67a4d1ab8",
      location_type_id: "7843879a-758a-46f7-9b08-2fe8f2596dc3", // Hub
      name: "Back Yard",
      description: "A place where people gather for picnics and activities.",
    },
    {
      id: "dba1c5fc-570b-454f-96ee-a60f54788c10",
      mystery_id: "e8c995c5-1abb-4135-b092-9fe67a4d1ab8",
      location_type_id: "14b99ca5-7fe1-4e55-80fe-9c6429c9be18", // Den
      name: "Cooler",
      description: "A place to keep things cold during a picnic.",
    },
  ]);
};
