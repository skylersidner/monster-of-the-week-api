const { EntitiesApi } = require('./EntitiesApi');

class MonsterArmorsApi extends EntitiesApi {
  constructor(db) {
    super('monster_armors', db);
  }
}

module.exports = { MonsterArmorsApi };