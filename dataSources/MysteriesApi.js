const { EntitiesApi } = require('./EntitiesApi');

class MysteriesApi extends EntitiesApi {
  constructor(db) {
    super('mysteries', db);
  }
}

module.exports = { MysteriesApi };