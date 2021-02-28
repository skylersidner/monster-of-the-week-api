const locationTypes = {
  Query: {
    async locationTypes(source, args, { dataSources }) {
      const { locationTypeApi } = dataSources;
      const result = await locationTypeApi.all();
      return result.data;
    },
    async locationType(source, { id }, { dataSources }) {
      const { locationTypeApi } = dataSources;
      return locationTypeApi.byId({ id });
    }
  },
  Mutation: {
    async createLocationType(source, { input }, { dataSources }) {
      const { locationTypeApi } = dataSources;
      return locationTypeApi.create({ entity: input });
    },
    async updateLocationType(source, { input }, { dataSources }) {
      const { locationTypeApi } = dataSources;
      return locationTypeApi.update({ entity: input });
    },
    async deleteLocationType(source, { id }, { dataSources }) {
      const { locationTypeApi } = dataSources;
      return locationTypeApi.delete({ id });
    }
  }
};

module.exports = locationTypes;