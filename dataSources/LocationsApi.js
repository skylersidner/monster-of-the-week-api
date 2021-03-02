const { EntitiesApi } = require('./EntitiesApi');

class LocationsApi extends EntitiesApi {
  constructor(db) {
    super('locations', db);
  }
}

module.exports = { LocationsApi };