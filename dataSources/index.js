const { SQLDataSource } = require('datasource-sql');

const { BystanderTypesApi } = require('./BystanderTypesApi');
const { CountdownsApi } = require('./CountdownsApi');
const { LocationTypesApi } = require('./LocationTypesApi');
const { MinionTypesApi } = require('./MinionTypesApi');
const { MonsterPowersApi } = require('./MonsterPowersApi');
const { MonsterTypesApi } = require('./MonsterTypesApi');
const { MysteriesApi } = require('./MysteriesApi');

const { createConnection } = require('./connection')

// TODO: refactor this elsewhere?
const databaseConnection = createConnection();
class DataSource extends SQLDataSource {}
const db = new DataSource(databaseConnection).db;

function dataSources() {
  return {
    bystanderTypesApi: new BystanderTypesApi(db),
    countdownsApi: new CountdownsApi(db),
    locationTypesApi: new LocationTypesApi(db),
    minionTypesApi: new MinionTypesApi(db),
    monsterPowersApi: new MonsterPowersApi(db),
    monsterTypesApi: new MonsterTypesApi(db),
    mysteriesApi: new MysteriesApi(db),
  }
}
module.exports = {
  BystanderTypesApi,
  CountdownsApi,
  LocationTypesApi,
  MinionTypesApi,
  MonsterPowersApi,
  MonsterTypesApi,
  MysteriesApi,
  dataSources,
};