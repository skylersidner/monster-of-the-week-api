const mysteries = {
  Query: {
    async mysteries(source, args, { dataSources }) {
      const { mysteriesApi } = dataSources;
      const result = await mysteriesApi.all();
      return result.data;
    },
    async mystery(source, { id }, { dataSources }) {
      const { mysteriesApi } = dataSources;
      return mysteriesApi.byId({ id });
    }
  },
  Mutation: {
    async createMystery(source, { input }, { dataSources }) {
      const { mysteriesApi } = dataSources;
      return mysteriesApi.create({ entity: input });
    },
    async updateMystery(source, { input }, { dataSources }) {
      const { mysteriesApi } = dataSources;
      return mysteriesApi.update({ entity: input });
    },
    async deleteMystery(source, { id }, { dataSources }) {
      const { mysteriesApi } = dataSources;
      return mysteriesApi.delete({ id });
    }
  }
};

module.exports = mysteries;