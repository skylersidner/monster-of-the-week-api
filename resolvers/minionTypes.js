const minionTypes = {
  Query: {
    async minionTypes(source, args, { dataSources }) {
      const { minionTypesApi } = dataSources;
      const result = await minionTypesApi.all();
      return result.data;
    },
    async minionType(source, { id }, { dataSources }) {
      const { minionTypesApi } = dataSources;
      return minionTypesApi.byId({ id });
    }
  },
  Mutation: {
    async createMinionType(source, { input }, { dataSources }) {
      const { minionTypesApi } = dataSources;
      return minionTypesApi.create({ entity: input });
    },
    async updateMinionType(source, { input }, { dataSources }) {
      const { minionTypesApi } = dataSources;
      return minionTypesApi.update({ entity: input });
    },
    async deleteMinionType(source, { id }, { dataSources }) {
      const { minionTypesApi } = dataSources;
      return minionTypesApi.delete({ id });
    }
  }
};

module.exports = minionTypes;