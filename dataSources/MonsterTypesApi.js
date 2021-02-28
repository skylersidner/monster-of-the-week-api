const { EntitiesApi } = require('./EntitiesApi');

class MonsterTypesApi extends EntitiesApi {
  constructor(db) {
    super('monster_types', db);
  }
}

module.exports = { MonsterTypesApi };