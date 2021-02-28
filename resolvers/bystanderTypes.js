const bystanderTypes = {
  Query: {
    async bystanderTypes(source, args, { dataSources }) {
      const { bystanderTypesApi } = dataSources;
      const result = await bystanderTypesApi.all();
      return result.data;
    },
    async bystanderType(source, { id }, { dataSources }) {
      const { bystanderTypesApi } = dataSources;
      return bystanderTypesApi.byId({ id });
    }
  },
  Mutation: {
    async createBystanderType(source, { input }, { dataSources }) {
      const { bystanderTypesApi } = dataSources;
      return bystanderTypesApi.create({ entity: input });
    },
    async updateBystanderType(source, { input }, { dataSources }) {
      const { bystanderTypesApi } = dataSources;
      return bystanderTypesApi.update({ entity: input });
    },
    async deleteBystanderType(source, { id }, { dataSources }) {
      const { bystanderTypesApi } = dataSources;
      return bystanderTypesApi.delete({ id });
    }
  }
};

module.exports = bystanderTypes;