const { EntitiesApi } = require('./EntitiesApi');

class CountdownsApi extends EntitiesApi {
  constructor(db) {
    super('countdowns', db);
  }
}

module.exports = { CountdownsApi };