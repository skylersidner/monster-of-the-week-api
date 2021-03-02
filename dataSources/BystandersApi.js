const { EntitiesApi } = require('./EntitiesApi');

class BystandersApi extends EntitiesApi {
  constructor(db) {
    super('bystanders', db);
  }
}

module.exports = { BystandersApi };