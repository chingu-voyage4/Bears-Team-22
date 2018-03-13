import Job from './jobSchema'; 
import Message from './messageSchema';
import resolvers from '../resolvers';
import jobResolvers from '../resolvers/jobResolvers';
const { makeExecutableSchema } = require('graphql-tools');


const RootQuery = `
  type RootQuery {
      job,
      message
  }
`;

const SchemaDefinition = `
  schema {
    query: {
      Job,
      Message
    }
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Job, Message],
  resolvers: resolvers
});

export default schema;