const bystanders = {
  Query: {
    async bystanders(source, args, { dataSources }) {
      const { bystandersApi } = dataSources;
      const result = await bystandersApi.all();
      return result.data;
    },
    async bystander(source, { id }, { dataSources }) {
      const { bystandersApi } = dataSources;
      return bystandersApi.byId({ id });
    }
  },
  Mutation: {
    async createBystander(source, { input }, { dataSources }) {
      const { bystandersApi } = dataSources;
      return bystandersApi.create({ entity: input });
    },
    async updateBystander(source, { input }, { dataSources }) {
      const { bystandersApi } = dataSources;
      return bystandersApi.update({ entity: input });
    },
    async deleteBystander(source, { id }, { dataSources }) {
      const { bystandersApi } = dataSources;
      return bystandersApi.delete({ id });
    }
  }
};

module.exports = bystanders;