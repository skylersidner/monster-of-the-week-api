const { EntitiesApi } = require('./EntitiesApi');

class MonsterAttacksApi extends EntitiesApi {
  constructor(db) {
    super('monster_attacks', db);
  }
}

module.exports = { MonsterAttacksApi };