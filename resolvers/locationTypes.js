const locationTypes = {
  Query: {
    async locationTypes(source, args, { dataSources }) {
      const { locationTypesApi } = dataSources;
      const result = await locationTypesApi.all();
      return result.data;
    },
    async locationType(source, { id }, { dataSources }) {
      const { locationTypesApi } = dataSources;
      return locationTypesApi.byId({ id });
    }
  },
  Mutation: {
    async createLocationType(source, { input }, { dataSources }) {
      const { locationTypesApi } = dataSources;
      return locationTypesApi.create({ entity: input });
    },
    async updateLocationType(source, { input }, { dataSources }) {
      const { locationTypesApi } = dataSources;
      return locationTypesApi.update({ entity: input });
    },
    async deleteLocationType(source, { id }, { dataSources }) {
      const { locationTypesApi } = dataSources;
      return locationTypesApi.delete({ id });
    }
  }
};

module.exports = locationTypes;