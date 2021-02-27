exports.seed = function (knex) {
  return knex("monster_types").insert([
    {
      id: "7be9966a-cb4e-4511-8776-35d15ed4a463",
      name: "Beast",
      motivation: "to run wild, destroying and killing"
    },
    {
      id: "d8ed4b42-73f3-43db-abab-b9d179836db8",
      name: "Breeder",
      motivation: "to give birth to, bring forth, or create evil"
    },
    {
      id: "59f91ecf-1184-45e7-94e1-8c6b26e8d5c8",
      name: "Collector",
      motivation: "to steal specific sorts of things"
    },
    {
      id: "550a4c6d-2d1d-4200-b77c-6a7352cf5ac3",
      name: "Destroyer",
      motivation: "to bring about the end of the world"
    },
    {
      id: "6607060c-7c7d-4694-9ac5-19408f14b215",
      name: "Devourer",
      motivation: "to consume people"
    },
    {
      id: "c5b71cc9-b7f4-42d2-bb18-1010fdbb56af",
      name: "Executioner",
      motivation: "to punish the guilty"
    },
    {
      id: "b4d5b350-e047-44d8-acbc-829e6c1179e8",
      name: "Parasite",
      motivation: "to infest, control, and devour"
    },
    {
      id: "7623cd42-8f05-4de7-8037-896473259a35",
      name: "Queen",
      motivation: "to possess and control"
    },
    {
      id: "df810ffc-5d17-4d2d-83c0-8bb0f83c05fa",
      name: "Sorcerer",
      motivation: "to usurp unnatural power"
    },
    {
      id: "ba6b2c29-401c-4882-a253-ad631baa68bf",
      name: "Tempter",
      motivation: "to tempt people into evil deeds"
    },
    {
      id: "768cec14-db27-46f9-8f7d-ca0fd86caa90",
      name: "Torturer",
      motivation: "to hurt and terrify"
    },
    {
      id: "91469c06-4a7e-456c-87a4-c57f68c70daf",
      name: "Trickster",
      motivation: "to create chaos"
    },
    {
      id: "83efb49d-5ce0-4f16-b46f-41946409c8da",
      name: "Minion",
      motivation: "to serve the monster..."
    },
  ]);
};
