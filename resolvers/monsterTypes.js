const monsterTypes = {
  Query: {
    async monsterTypes(source, args, { dataSources }) {
      const { monsterTypesApi } = dataSources;
      const result = await monsterTypesApi.all();
      return result.data;
    },
    async monsterType(source, { id }, { dataSources }) {
      const { monsterTypesApi } = dataSources;
      return monsterTypesApi.byId({ id });
    }
  },
  Mutation: {
    async createMonsterType(source, { input }, { dataSources }) {
      const { monsterTypesApi } = dataSources;
      return monsterTypesApi.create({ entity: input });
    },
    async updateMonsterType(source, { input }, { dataSources }) {
      const { monsterTypesApi } = dataSources;
      return monsterTypesApi.update({ entity: input });
    },
    async deleteMonsterType(source, { id }, { dataSources }) {
      const { monsterTypesApi } = dataSources;
      return monsterTypesApi.delete({ id });
    }
  }
};

module.exports = monsterTypes;