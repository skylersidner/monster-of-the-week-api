exports.seed = function (knex) {
  return knex("bystander_types").insert([
    {
      id: "3d8284e8-3e37-4b9d-bebf-798edf22f9e3",
      name: "Busybody",
      motivation: "to interfere with other people's plans"
    },
    {
      id: "f91ef094-4b7f-44ab-80b3-9c1cdaf1571a",
      name: "Detective",
      motivation: "ro rule out explanations"
    },
    {
      id: "370aad6a-339c-48e4-80c5-c87772d631a6",
      name: "Gossip",
      motivation: "to pass on rumours"
    },
    {
      id: "669b2354-fb2e-4eaa-98fb-43ef9fcacda0",
      name: "Helper",
      motivation: "to join the hunt"
    },
    {
      id: "2f9867ea-e1e0-47de-b0bf-2e087c5320d0",
      name: "Innocent",
      motivation: "to do the right thing"
    },
    {
      id: "7bf559d5-0ea8-4eca-b40f-ef88546621af",
      name: "Official",
      motivation: "to be suspicious"
    },
    {
      id: "c110dd37-9a67-411a-8e42-653c62586ed8",
      name: "Skeptic",
      motivation: "to deny supernatural explanations"
    },
    {
      id: "360c8bc7-0df7-4ba8-b525-df8d85b43c0f",
      name: "Victim",
      motivation: "to put themselves in danger"
    },
    {
      id: "263e29ce-52b8-416a-8c46-1e7005f0d082",
      name: "Witness",
      motivation: "to reveal information"
    },
  ]);
};

