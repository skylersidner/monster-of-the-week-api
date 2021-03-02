const { EntitiesApi } = require('./EntitiesApi');

class MonsterCustomMovesApi extends EntitiesApi {
  constructor(db) {
    super('monster_custom_moves', db);
  }
}

module.exports = { MonsterCustomMovesApi };