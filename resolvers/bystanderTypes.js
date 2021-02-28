const bystanderTypes = {
  Query: {
    async bystanderTypes(source, args, { dataSources }) {
      const { bystanderTypeApi } = dataSources;
      const result = await bystanderTypeApi.all();
      return result.data;
    },
    async bystanderType(source, { id }, { dataSources }) {
      const { bystanderTypeApi } = dataSources;
      return bystanderTypeApi.byId({ id });
    }
  },
  Mutation: {
    async createBystanderType(source, { input }, { dataSources }) {
      const { bystanderTypeApi } = dataSources;
      return bystanderTypeApi.create({ entity: input });
    },
    async updateBystanderType(source, { input }, { dataSources }) {
      const { bystanderTypeApi } = dataSources;
      return bystanderTypeApi.update({ entity: input });
    },
    async deleteBystanderType(source, { id }, { dataSources }) {
      const { bystanderTypeApi } = dataSources;
      return bystanderTypeApi.delete({ id });
    }
  }
};

module.exports = bystanderTypes;