const { SQLDataSource } = require('datasource-sql');

const { BystanderTypesApi } = require('./BystanderTypesApi');
const { CountdownsApi } = require('./CountdownsApi');
const { LocationTypesApi } = require('./LocationTypesApi');
const { MinionTypesApi } = require('./MinionTypesApi');
const { MonsterAttacksApi } = require('./MonsterAttacksApi');
const { MonsterAttacksWeaponTagsApi } = require('./MonsterAttacksWeaponTagsApi');
const { MonsterPowersApi } = require('./MonsterPowersApi');
const { MonstersApi } = require('./MonstersApi');
const { MonsterTypesApi } = require('./MonsterTypesApi');
const { MysteriesApi } = require('./MysteriesApi');
const { WeaponTagsApi } = require('./WeaponTagsApi');

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
    monsterAttacksApi: new MonsterAttacksApi(db),
    monsterAttacksWeaponTagsApi: new MonsterAttacksWeaponTagsApi(db),
    monsterPowersApi: new MonsterPowersApi(db),
    monstersApi: new MonstersApi(db),
    monsterTypesApi: new MonsterTypesApi(db),
    mysteriesApi: new MysteriesApi(db),
    weaponTagsApi: new WeaponTagsApi(db),
  }
}
module.exports = {
  BystanderTypesApi,
  CountdownsApi,
  LocationTypesApi,
  MinionTypesApi,
  MonsterAttacksApi,
  MonsterAttacksWeaponTagsApi,
  MonsterPowersApi,
  MonstersApi,
  MonsterTypesApi,
  MysteriesApi,
  WeaponTagsApi,
  dataSources,
};