exports.seed = function (knex) {
  return knex("location_types").insert([
    {
      id: "b372f88c-3c0f-4a08-a6e3-588759e80135",
      name: "Crossroads",
      motivation: "to bring people and things together"
    },
    {
      id: "4fd82b7d-823f-4ffc-a9d8-3a03b1e68c46",
      name: "Deathtrap",
      motivation: "to harm intruders"
    },
    {
      id: "14b99ca5-7fe1-4e55-80fe-9c6429c9be18",
      name: "Den",
      motivation: "to harbor monsters"
    },
    {
      id: "bb71106b-d69f-47aa-81e0-39583c276a4a",
      name: "Fortress",
      motivation: "to deny entry"
    },
    {
      id: "d60c2bbd-68bc-41b5-817b-e820706bce69",
      name: "Hellgate",
      motivation: "to create evil"
    },
    {
      id: "7843879a-758a-46f7-9b08-2fe8f2596dc3",
      name: "Hub",
      motivation: "to reveal information"
    },
    {
      id: "d968423f-c2c7-4099-a5ea-b249143ca2d6",
      name: "Lab",
      motivation: "to create weirdness"
    },
    {
      id: "961a874a-5c5c-4684-b895-d8172ab59d00",
      name: "Maze",
      motivation: "to confuse and separate"
    },
    {
      id: "3cbac283-e046-4b64-9011-bfa15124cb2c",
      name: "Prison",
      motivation: "to constrain and prevent exit"
    },
    {
      id: "aee6e4a4-e8b6-488a-983a-2184c7e93d0c",
      name: "Wilds",
      motivation: "to contain hidden things"
    },
  ]);
};