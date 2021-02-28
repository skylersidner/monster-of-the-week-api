const { EntitiesApi } = require('./EntitiesApi');

class WeaponTagsApi extends EntitiesApi {
  constructor(db) {
    super('weapon_tags', db);
  }
}

module.exports = { WeaponTagsApi };