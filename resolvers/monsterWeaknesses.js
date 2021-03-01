const monsterWeaknesses = {
  Query: {
    async monsterWeaknesses(source, args, { dataSources }) {
      const { monsterWeaknessesApi } = dataSources;
      const result = await monsterWeaknessesApi.all();
      return result.data;
    },
    async monsterWeakness(source, { id }, { dataSources }) {
      const { monsterWeaknessesApi } = dataSources;
      return monsterWeaknessesApi.byId({ id });
    }
  },
  Mutation: {
    async createMonsterWeakness(source, { input }, { dataSources }) {
      const { monsterWeaknessesApi } = dataSources;
      return monsterWeaknessesApi.create({ entity: input });
    },
    async updateMonsterWeakness(source, { input }, { dataSources }) {
      const { monsterWeaknessesApi } = dataSources;
      return monsterWeaknessesApi.update({ entity: input });
    },
    async deleteMonsterWeakness(source, { id }, { dataSources }) {
      const { monsterWeaknessesApi } = dataSources;
      return monsterWeaknessesApi.delete({ id });
    }
  }
};

module.exports = monsterWeaknesses;