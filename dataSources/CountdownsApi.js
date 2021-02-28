const { EntityApi } = require('./EntityApi');

class CountdownsApi extends EntityApi {
  constructor(db) {
    super('countdowns', db);
  }
}

module.exports = { CountdownsApi };