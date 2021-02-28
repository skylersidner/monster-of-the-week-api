const hasOnlyOneType = input => {

  const { monsterTypeId, minionTypeId } = input;
  const hasNoType = !monsterTypeId && !minionTypeId;
  const hasBothTypes = monsterTypeId && minionTypeId;

  return !(hasNoType || hasBothTypes);
}

const monsters = {
  Query: {
    async monsters(source, args, { dataSources }) {
      const { monstersApi } = dataSources;
      const result = await monstersApi.all();
      return result.data;
    },
    async monster(source, { id }, { dataSources }) {
      const { monstersApi } = dataSources;
      return monstersApi.byId({ id });
    }
  },
  Mutation: {
    async createMonster(source, { input }, { dataSources }) {
      if (!hasOnlyOneType(input)) {
        throw new Error('Must have either a monsterTypeId or a minionTypeId')
      }

      const { monstersApi } = dataSources;
      return monstersApi.create({ entity: input });
    },
    async updateMonster(source, { input }, { dataSources }) {
      if (!hasOnlyOneType(input)) {
        throw new Error('Must have either a monsterTypeId or a minionTypeId')
      }

      const { monstersApi } = dataSources;
      return monstersApi.update({ entity: input });
    },
    async deleteMonster(source, { id }, { dataSources }) {
      const { monstersApi } = dataSources;
      return monstersApi.delete({ id });
    }
  }
};

module.exports = monsters;