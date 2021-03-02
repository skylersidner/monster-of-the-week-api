const mysteryCustomMoves = {
  Query: {
    async mysteryCustomMoves(source, args, { dataSources }) {
      const { mysteryCustomMovesApi } = dataSources;
      const result = await mysteryCustomMovesApi.all();
      return result.data;
    },
    async mysteryCustomMove(source, { id }, { dataSources }) {
      const { mysteryCustomMovesApi } = dataSources;
      return mysteryCustomMovesApi.byId({ id });
    }
  },
  Mutation: {
    async createMysteryCustomMove(source, { input }, { dataSources }) {
      const { mysteryCustomMovesApi } = dataSources;
      return mysteryCustomMovesApi.create({ entity: input });
    },
    async updateMysteryCustomMove(source, { input }, { dataSources }) {
      const { mysteryCustomMovesApi } = dataSources;
      return mysteryCustomMovesApi.update({ entity: input });
    },
    async deleteMysteryCustomMove(source, { id }, { dataSources }) {
      const { mysteryCustomMovesApi } = dataSources;
      return mysteryCustomMovesApi.delete({ id });
    }
  }
};

module.exports = mysteryCustomMoves;