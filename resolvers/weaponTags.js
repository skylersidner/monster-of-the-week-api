const weaponTags = {
  Query: {
    async weaponTags(source, args, { dataSources }) {
      const { weaponTagsApi } = dataSources;
      const result = await weaponTagsApi.all();
      return result.data;
    },
    async weaponTag(source, { id }, { dataSources }) {
      const { weaponTagsApi } = dataSources;
      return weaponTagsApi.byId({ id });
    }
  },
  Mutation: {
    async createWeaponTag(source, { input }, { dataSources }) {
      const { weaponTagsApi } = dataSources;
      return weaponTagsApi.create({ entity: input });
    },
    async updateWeaponTag(source, { input }, { dataSources }) {
      const { weaponTagsApi } = dataSources;
      return weaponTagsApi.update({ entity: input });
    },
    async deleteWeaponTag(source, { id }, { dataSources }) {
      const { weaponTagsApi } = dataSources;
      return weaponTagsApi.delete({ id });
    }
  }
};

module.exports = weaponTags;