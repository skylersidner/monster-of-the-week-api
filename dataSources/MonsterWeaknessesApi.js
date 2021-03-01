const { EntitiesApi } = require('./EntitiesApi');

class MonsterWeaknessesApi extends EntitiesApi {
  constructor(db) {
    super('monster_weaknesses', db);
  }
}

module.exports = { MonsterWeaknessesApi };