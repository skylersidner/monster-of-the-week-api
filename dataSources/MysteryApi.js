const { EntityApi } = require('./EntityApi');

class MysteryApi extends EntityApi {
  constructor(db) {
    super('mysteries', db);
  }
}

module.exports = { MysteryApi };