const monsterAttacks = {
  Query: {
    async monsterAttacks(source, args, { dataSources }) {
      const { monsterAttacksApi } = dataSources;
      const result = await monsterAttacksApi.all();
      return result.data;
    },
    async monsterAttack(source, { id }, { dataSources }) {
      const { monsterAttacksApi } = dataSources;
      return monsterAttacksApi.byId({ id });
    }
  },
  Mutation: {
    async createMonsterAttack(source, { input }, { dataSources }) {
      const { monsterAttacksApi } = dataSources;
      return monsterAttacksApi.create({ entity: input });
    },
    async updateMonsterAttack(source, { input }, { dataSources }) {
      const { monsterAttacksApi } = dataSources;
      return monsterAttacksApi.update({ entity: input });
    },
    async deleteMonsterAttack(source, { id }, { dataSources }) {
      const { monsterAttacksApi } = dataSources;
      return monsterAttacksApi.delete({ id });
    }
  }
};

module.exports = monsterAttacks;