const countdowns = {
  Query: {
    async countdowns(source, args, { dataSources }) {
      const { countdownsApi } = dataSources;
      const result = await countdownsApi.all();
      return result.data;
    },
    async countdown(source, { id }, { dataSources }) {
      const { countdownsApi } = dataSources;
      return countdownsApi.byId({ id });
    }
  },
  Mutation: {
    async createCountdown(source, { input }, { dataSources }) {
      const { countdownsApi } = dataSources;
      return countdownsApi.create({ entity: input });
    },
    async updateCountdown(source, { input }, { dataSources }) {
      const { countdownsApi } = dataSources;
      return countdownsApi.update({ entity: input });
    },
    async deleteCountdown(source, { id }, { dataSources }) {
      const { countdownsApi } = dataSources;
      return countdownsApi.delete({ id });
    }
  }
};

module.exports = countdowns;