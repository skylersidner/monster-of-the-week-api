const common = {
  Query: {
    testQuery: () => {
      return {
        test: 'Success!',
      };
    },
  },
  Mutation: {
    testMutation: () => {
      return {
        test: 'Success!'
      }
    }
  }
};

module.exports = common;