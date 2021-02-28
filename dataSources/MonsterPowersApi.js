const { EntitiesApi } = require('./EntitiesApi');

class MonsterPowersApi extends EntitiesApi {
  constructor(db) {
    super('monster_powers', db);
  }
}

module.exports = { MonsterPowersApi };