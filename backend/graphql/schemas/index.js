import Job from './jobSchema'; 
import resolvers from '../resolvers';
import jobResolvers from '../resolvers/jobResolvers';
const { makeExecutableSchema } = require('graphql-tools');


const RootQuery = `
  type RootQuery {
      job
  }
`;

const SchemaDefinition = `
  schema {
    query: Job
  }
`;


const schema = makeExecutableSchema({
  typeDefs: Job,
  resolvers: resolvers
});

export default schema;