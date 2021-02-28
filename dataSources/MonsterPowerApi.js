const { EntityApi } = require('./EntityApi');

class MonsterPowerApi extends EntityApi {
  constructor(db) {
    super('monster_powers', db);
  }
}

module.exports = { MonsterPowerApi };