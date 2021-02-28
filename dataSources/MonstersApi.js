const { EntitiesApi } = require('./EntitiesApi');

class MonstersApi extends EntitiesApi {
  constructor(db) {
    super('monsters', db);
  }
}

module.exports = { MonstersApi };