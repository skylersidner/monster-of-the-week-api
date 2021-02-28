const { EntityApi } = require('./EntityApi');

class MonsterTypeApi extends EntityApi {
  constructor(db) {
    super('monster_types', db);
  }
}

module.exports = { MonsterTypeApi };