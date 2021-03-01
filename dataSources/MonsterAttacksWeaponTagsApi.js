const { EntitiesApi } = require('./EntitiesApi');

class MonsterAttacksWeaponTagsApi extends EntitiesApi {
  constructor(db) {
    super('monster_tags_weapon_tags', db);
  }
}

module.exports = { MonsterAttacksWeaponTagsApi };