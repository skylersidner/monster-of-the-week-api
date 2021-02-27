exports.seed = function (knex) {
  return knex("weapon_tags").insert([
    {
      id: "88c36582-173f-4d4e-bf16-3bcd026bb385",
      name: "area",
      description: "Can hit multiple foes. You may divide the harm you inflict among multiple targets."
    },
    {
      id: "47aa592d-69a2-4014-9a6f-d6eca6e3f1b8",
      name: "balanced",
      description: "Easy to wield and keep your grip on."
    },
    {
      id: "de77df2c-67ec-47d8-8677-38d2aa13ce6b",
      name: "barrier",
      description: "Does harm to anything that passes through. Counts as armour against any attacks that pass through it."
    },
    {
      id: "5f398746-691d-4ebf-a935-b02f8c8e8846",
      name: "close",
      description: "Effective at fairly close quarters—outside arms’ reach, but not too far."
    },
    {
      id: "9c5f194f-087a-4f3d-a778-d800082a328b",
      name: "far",
      description: "Effective at long range."
    },
    {
      id: "ad6b8212-57f3-4a26-a223-78f4ebf3da82",
      name: "fire",
      description: "Sets things on fire."
    },
    {
      id: "f6f0f80f-813f-4be4-9969-f364cf672c38",
      name: "forceful",
      description: "Pushes things around, allowing you to \"force them where you want them\" in addition to normal attack effects."
    },
    {
      id: "d99d89bf-cc58-4e52-a284-afb0feea0563",
      name: "hand",
      description: "Effective within arms’ reach."
    },
    {
      id: "20aeb4fc-8f11-42eb-a8a6-f41079c515fe",
      name: "lifedrain",
      description: "Transfers life energy: the wielder is healed for as many points of harm as were inflicted. E.g. if you inflict 2-harm, then you heal 2-harm from your injuries."
    },
    {
      id: "7b3a3d98-fba9-4f58-9b44-7ab0d10255b5",
      name: "heavy",
      description: "This weapon is heavy and difficult to wield."
    },
    {
      id: "9d4feded-3302-44cf-bf66-74c47f04eaec",
      name: "holy",
      description: "This will be more effective against monsters with a weakness to holy items."
    },
    {
      id: "f7193cb7-1c68-4233-8c27-878a49506824",
      name: "ignore armor",
      description: "Ignores protective armour. Armour has no effect on this harm. If armour has the magic tag, then the attack needs both ignore-armour and magic to bypass the armour."
    },
    {
      id: "246c77dc-2df5-4080-9a27-4cf5bfcf073d",
      name: "innocuous",
      description: "Doesn't draw suspicion."
    },
    {
      id: "dda55ea2-6d10-4622-879d-f26d0ab7c2fd",
      name: "embrace",
      description: "Effective at the closest of quarters—within the embrace of your foe."
    },
    {
      id: "ed104e83-b975-401d-af08-de5ff71ee153",
      name: "loud",
      description: "Loud enough that it draws attention."
    },
    {
      id: "f2a23907-8bac-4538-a063-33b901bc2203",
      name: "magic",
      description: "Enchanted, and so can affect certain creatures and armours that are proof against normal weapons."
    },
    {
      id: "8a0dcd0e-0a8a-4ec1-8dee-4307f245872a",
      name: "many",
      description: "These weapons are small enough you can carry a large number of them."
    },
    {
      id: "a8801953-482a-48a1-b8d9-d1104434e3b4",
      name: "messy",
      description: "Spreads a lot of blood and gore around."
    },
    {
      id: "e8c2bf83-dc76-4378-a551-32b3c7d22833",
      name: "quick",
      description: "Fast to prepare and attack with, giving you a better chance of going first."
    },
    {
      id: "6b0e4cba-c642-498f-9f5d-740a28ba7fca",
      name: "reload",
      description: "This weapon has limited ammunition, and may run out and need to be reloaded."
    },
    {
      id: "caa3f6eb-e947-4512-8fda-50592255ff03",
      name: "restraining",
      description: "A successful attack entangles or grabs the victim."
    },
    {
      id: "cf2b299e-20f4-4886-ad1d-5f87dab08ac9",
      name: "slow",
      description: "This weapon is slow to prepare and attack with."
    },
    {
      id: "55419984-648d-49d3-814b-ec641f3cfa28",
      name: "small",
      description: "This weapon is tiny and easy to conceal."
    },
    {
      id: "b82230d1-dd21-48cc-8ea0-6706975a0d16",
      name: "unreliable",
      description: "This weapon needs regular cleaning and maintenance, otherwise it just isn’t gonna work."
    },
    {
      id: "4b01f0ef-b1f1-4282-8fed-8d9c43c4bdc5",
      name: "useful",
      description: "This weapon has other uses aside from violence."
    },
    {
      id: "1088385b-6f05-4086-bb55-075def0937f2",
      name: "valuable",
      description: "This weapon is antique, or made of valuable materials."
    },
    {
      id: "a76015c8-f87c-400a-b951-edbb9844dbc3",
      name: "volatile",
      description: "This weapon is dangerous and unstable."
    },
    {
      id: "d9a9e44a-e3cd-4e7f-953d-b15a5d455f90",
      name: "gold",
      description: "Soft with low reactivity."
    },
    {
      id: "9bfaa1c3-bf35-424a-bd35-fef692cd2bbd",
      name: "silver",
      description: "Highly reflective and conductive, often mixed with other metals to produce a more sturdy material."
    },
    {
      id: "7c18a071-2c86-4b64-a8b9-d5ab9e8db74e",
      name: "copper",
      description: "While less conductive than gold or silver, it is far cheaper and requires less refinement."
    },
    {
      id: "79f4276b-6ae8-459c-b4a8-45632aa4ef17",
      name: "steel",
      description: "Highly refined and much stronger (though less pure) form of iron."
    },
    {
      id: "eae6b63e-ce7e-440b-8a73-eca47e35e92a",
      name: "wrought iron",
      description: "Low carbon content, resists corrosion, less refined and weaker than steel."
    },
    {
      id: "d6af8535-ca4e-4b50-aa3d-6843082f8728",
      name: "bone",
      description: "Made from an animal."
    },
    {
      id: "f2b97f9e-5223-4cf6-a66a-e0eb4df5094f",
      name: "wood",
      description: "Made from dense tree or bush material, typically dried and sealed."
    },
    {
      id: "648a276b-f785-4ddb-91a5-1aaa60d024e0",
      name: "ebony",
      description: "Made from an extremely dark, dense wood. Also useful for anything requiring wood."
    },
    {
      id: "e80e19f5-03da-4270-b073-c53fd3af6760",
      name: "ivory",
      description: "Made from elephant tusks/teeth. Also useful for anything requiring bone."
    },
  ]);
};