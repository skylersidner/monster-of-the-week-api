const monsterCustomMoves = {
  Query: {
    async monsterCustomMoves(source, args, { dataSources }) {
      const { monsterCustomMovesApi } = dataSources;
      const result = await monsterCustomMovesApi.all();
      return result.data;
    },
    async monsterCustomMove(source, { id }, { dataSources }) {
      const { monsterCustomMovesApi } = dataSources;
      return monsterCustomMovesApi.byId({ id });
    }
  },
  Mutation: {
    async createMonsterCustomMove(source, { input }, { dataSources }) {
      const { monsterCustomMovesApi } = dataSources;
      return monsterCustomMovesApi.create({ entity: input });
    },
    async updateMonsterCustomMove(source, { input }, { dataSources }) {
      const { monsterCustomMovesApi } = dataSources;
      return monsterCustomMovesApi.update({ entity: input });
    },
    async deleteMonsterCustomMove(source, { id }, { dataSources }) {
      const { monsterCustomMovesApi } = dataSources;
      return monsterCustomMovesApi.delete({ id });
    }
  }
};

module.exports = monsterCustomMoves;