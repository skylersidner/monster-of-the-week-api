exports.seed = function (knex) {
  return knex("minion_types").insert([
    {
      id: "5524f2e2-aea8-4888-8699-546548113cfd",
      name: "Assassin",
      motivation: "to kill the hunters"
    },
    {
      id: "ab9a7481-d80d-48a9-a122-463f2ea1c502",
      name: "Brute",
      motivation: "to intimidate and attack"
    },
    {
      id: "76165bd6-8f00-4679-b741-23bd091deef4",
      name: "Cultist",
      motivation: "to save their own skin at any cost"
    },
    {
      id: "b5e740fe-2510-4756-bb73-d534d819ea58",
      name: "Guardian",
      motivation: "to bar a way or protect something"
    },
    {
      id: "4837c4ea-0885-421b-9b47-f8baff767f63",
      name: "Right Hand",
      motivation: "to back up the monster"
    },
    {
      id: "6cf3d17c-6558-49c1-89a8-b1ad685d6868",
      name: "Plague",
      motivation: "to swarm and destroy"
    },
    {
      id: "f0f74db7-7900-4d1b-ab9e-da66ceea377f",
      name: "Renfield",
      motivation: "to push victims towards the monster"
    },
    {
      id: "32f0fb3e-348f-40cb-99c5-5103a1dfb6d4",
      name: "Scout",
      motivation: "to stalk, watch, and report"
    },
    {
      id: "166b736a-276b-44c8-9f81-a20640cefb3b",
      name: "Thief",
      motivation: "to steal and deliver to the monster"
    },
    {
      id: "95ad8ca6-f71e-4204-8cd3-86dfec6b5722",
      name: "Traitor",
      motivation: "to betray people"
    },
  ]);
};
