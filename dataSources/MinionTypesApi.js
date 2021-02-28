const { EntitiesApi } = require('./EntitiesApi');

class MinionTypesApi extends EntitiesApi {
  constructor(db) {
    super('minion_types', db);
  }
}

module.exports = { MinionTypesApi };