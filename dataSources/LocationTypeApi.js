const { EntityApi } = require('./EntityApi');

class LocationTypeApi extends EntityApi {
  constructor(db) {
    super('location_types', db);
  }
}

module.exports = { LocationTypeApi };