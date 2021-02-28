const { EntityApi } = require('./EntityApi');

class BystanderTypeApi extends EntityApi {
  constructor(db) {
    super('bystander_types', db);
  }
}

module.exports = { BystanderTypeApi };