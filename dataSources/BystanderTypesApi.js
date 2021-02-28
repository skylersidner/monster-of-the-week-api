const { EntitiesApi } = require('./EntitiesApi');

class BystanderTypesApi extends EntitiesApi {
  constructor(db) {
    super('bystander_types', db);
  }
}

module.exports = { BystanderTypesApi };