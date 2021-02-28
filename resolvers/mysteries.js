const mysteries = {
  Query: {
    async mysteries(source, args, { dataSources }) {
      const { mysteryApi } = dataSources;
      const result = await mysteryApi.all();
      return result.data;
    },
    async mystery(source, { id }, { dataSources }) {
      const { mysteryApi } = dataSources;
      return mysteryApi.byId({ id });
    }
  },
  Mutation: {
    async createMystery(source, { input }, { dataSources }) {
      const { mysteryApi } = dataSources;
      return mysteryApi.create({ entity: input });
    },
    async updateMystery(source, { input }, { dataSources }) {
      const { mysteryApi } = dataSources;
      return mysteryApi.update({ entity: input });
    },
    async deleteMystery(source, { id }, { dataSources }) {
      const { mysteryApi } = dataSources;
      return mysteryApi.delete({ id });
    }
  }
};

module.exports = mysteries;