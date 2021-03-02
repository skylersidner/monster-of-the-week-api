const locations = {
  Query: {
    async locations(source, args, { dataSources }) {
      const { locationsApi } = dataSources;
      const result = await locationsApi.all();
      return result.data;
    },
    async location(source, { id }, { dataSources }) {
      const { locationsApi } = dataSources;
      return locationsApi.byId({ id });
    }
  },
  Mutation: {
    async createLocation(source, { input }, { dataSources }) {
      const { locationsApi } = dataSources;
      return locationsApi.create({ entity: input });
    },
    async updateLocation(source, { input }, { dataSources }) {
      const { locationsApi } = dataSources;
      return locationsApi.update({ entity: input });
    },
    async deleteLocation(source, { id }, { dataSources }) {
      const { locationsApi } = dataSources;
      return locationsApi.delete({ id });
    }
  }
};

module.exports = locations;