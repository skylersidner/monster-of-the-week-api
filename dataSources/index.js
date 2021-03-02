const { SQLDataSource } = require('datasource-sql');

const { BystanderTypesApi } = require('./BystanderTypesApi');
const { CountdownsApi } = require('./CountdownsApi');
const { LocationsApi } = require('./LocationsApi');
const { LocationTypesApi } = require('./LocationTypesApi');
const { MinionTypesApi } = require('./MinionTypesApi');
const { MonsterArmorsApi } = require('./MonsterArmorsApi');
const { MonsterAttacksApi } = require('./MonsterAttacksApi');
const { MonsterAttacksWeaponTagsApi } = require('./MonsterAttacksWeaponTagsApi');
const { MonsterPowersApi } = require('./MonsterPowersApi');
const { MonstersApi } = require('./MonstersApi');
const { MonsterTypesApi } = require('./MonsterTypesApi');
const { MonsterWeaknessesApi } = require('./MonsterWeaknessesApi');
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
    locationsApi: new LocationsApi(db),
    locationTypesApi: new LocationTypesApi(db),
    minionTypesApi: new MinionTypesApi(db),
    monsterArmorsApi: new MonsterArmorsApi(db),
    monsterAttacksApi: new MonsterAttacksApi(db),
    monsterAttacksWeaponTagsApi: new MonsterAttacksWeaponTagsApi(db),
    monsterPowersApi: new MonsterPowersApi(db),
    monstersApi: new MonstersApi(db),
    monsterTypesApi: new MonsterTypesApi(db),
    monsterWeaknessesApi: new MonsterWeaknessesApi(db),
    mysteriesApi: new MysteriesApi(db),
    weaponTagsApi: new WeaponTagsApi(db),
  }
}
module.exports = {
  BystanderTypesApi,
  CountdownsApi,
  LocationsApi,
  LocationTypesApi,
  MinionTypesApi,
  MonsterArmorsApi,
  MonsterAttacksApi,
  MonsterAttacksWeaponTagsApi,
  MonsterPowersApi,
  MonstersApi,
  MonsterTypesApi,
  MonsterWeaknessesApi,
  MysteriesApi,
  WeaponTagsApi,
  dataSources,
};