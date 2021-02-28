const { EntitiesApi } = require('./EntitiesApi');

class LocationTypesApi extends EntitiesApi {
  constructor(db) {
    super('location_types', db);
  }
}

module.exports = { LocationTypesApi };