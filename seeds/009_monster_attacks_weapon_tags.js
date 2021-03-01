exports.seed = function (knex) {
  return knex("monster_attacks_weapon_tags").insert([
    {
      monster_attack_id: "4aa20b01-5fc9-4eab-81b6-0202f90fc2e8", // pop
      weapon_tag_id: "88c36582-173f-4d4e-bf16-3bcd026bb385", // area
    },
    {
      monster_attack_id: "4aa20b01-5fc9-4eab-81b6-0202f90fc2e8", // pop
      weapon_tag_id: "a8801953-482a-48a1-b8d9-d1104434e3b4", // messy
    },
    {
      monster_attack_id: "751728f2-9222-4045-acca-2cc54e5bbf6f", // cacophony
      weapon_tag_id: "ed104e83-b975-401d-af08-de5ff71ee153", // loud
    },
    {
      monster_attack_id: "751728f2-9222-4045-acca-2cc54e5bbf6f", // cacophony
      weapon_tag_id: "246c77dc-2df5-4080-9a27-4cf5bfcf073d", // innocuous
    },
  ]);
};
