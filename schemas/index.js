import {loadFiles} from "graphql-import-files";

const schema = loadFiles('**/schemas/**/*.{graphql,gql}')

export default schema