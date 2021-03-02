const { EntitiesApi } = require('./EntitiesApi');

class MysteryCustomMovesApi extends EntitiesApi {
  constructor(db) {
    super('mystery_custom_moves', db);
  }
}

module.exports = { MysteryCustomMovesApi };