const monsterPowers = {
  Query: {
    async monsterPowers(source, args, { dataSources }) {
      const { monsterPowersApi } = dataSources;
      const result = await monsterPowersApi.all();
      return result.data;
    },
    async monsterPower(source, { id }, { dataSources }) {
      const { monsterPowersApi } = dataSources;
      return monsterPowersApi.byId({ id });
    }
  },
  Mutation: {
    async createMonsterPower(source, { input }, { dataSources }) {
      const { monsterPowersApi } = dataSources;
      return monsterPowersApi.create({ entity: input });
    },
    async updateMonsterPower(source, { input }, { dataSources }) {
      const { monsterPowersApi } = dataSources;
      return monsterPowersApi.update({ entity: input });
    },
    async deleteMonsterPower(source, { id }, { dataSources }) {
      const { monsterPowersApi } = dataSources;
      return monsterPowersApi.delete({ id });
    }
  }
};

module.exports = monsterPowers;