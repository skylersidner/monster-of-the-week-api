const { loadFiles } = require("graphql-import-files");

const schema = loadFiles('**/schemas/**/*.{graphql,gql}')

module.exports = schema