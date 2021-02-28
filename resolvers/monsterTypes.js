const monsterTypes = {
  Query: {
    async monsterTypes(source, args, { dataSources }) {
      const { monsterTypeApi } = dataSources;
      const result = await monsterTypeApi.all();
      return result.data;
    },
    async monsterType(source, { id }, { dataSources }) {
      const { monsterTypeApi } = dataSources;
      return monsterTypeApi.byId({ id });
    }
  },
  Mutation: {
    async createMonsterType(source, { input }, { dataSources }) {
      const { monsterTypeApi } = dataSources;
      return monsterTypeApi.create({ entity: input });
    },
    async updateMonsterType(source, { input }, { dataSources }) {
      const { monsterTypeApi } = dataSources;
      return monsterTypeApi.update({ entity: input });
    },
    async deleteMonsterType(source, { id }, { dataSources }) {
      const { monsterTypeApi } = dataSources;
      return monsterTypeApi.delete({ id });
    }
  }
};

module.exports = monsterTypes;