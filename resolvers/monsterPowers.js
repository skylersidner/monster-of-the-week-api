const monsterPowers = {
  Query: {
    async monsterPowers(source, args, { dataSources }) {
      const { monsterPowerApi } = dataSources;
      const result = await monsterPowerApi.all();
      return result.data;
    },
    async monsterPower(source, { id }, { dataSources }) {
      const { monsterPowerApi } = dataSources;
      return monsterPowerApi.byId({ id });
    }
  },
  Mutation: {
    async createMonsterPower(source, { input }, { dataSources }) {
      const { monsterPowerApi } = dataSources;
      return monsterPowerApi.create({ entity: input });
    },
    async updateMonsterPower(source, { input }, { dataSources }) {
      const { monsterPowerApi } = dataSources;
      return monsterPowerApi.update({ entity: input });
    },
    async deleteMonsterPower(source, { id }, { dataSources }) {
      const { monsterPowerApi } = dataSources;
      return monsterPowerApi.delete({ id });
    }
  }
};

module.exports = monsterPowers;