const monsterArmors = {
  Query: {
    async monsterArmors(source, args, { dataSources }) {
      const { monsterArmorsApi } = dataSources;
      const result = await monsterArmorsApi.all();
      return result.data;
    },
    async monsterArmor(source, { id }, { dataSources }) {
      const { monsterArmorsApi } = dataSources;
      return monsterArmorsApi.byId({ id });
    }
  },
  Mutation: {
    async createMonsterArmor(source, { input }, { dataSources }) {
      const { monsterArmorsApi } = dataSources;
      return monsterArmorsApi.create({ entity: input });
    },
    async updateMonsterArmor(source, { input }, { dataSources }) {
      const { monsterArmorsApi } = dataSources;
      return monsterArmorsApi.update({ entity: input });
    },
    async deleteMonsterArmor(source, { id }, { dataSources }) {
      const { monsterArmorsApi } = dataSources;
      return monsterArmorsApi.delete({ id });
    }
  }
};

module.exports = monsterArmors;