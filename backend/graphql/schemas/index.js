import Job from './jobSchema';
import Message from './messageSchema';
import Account from './accountSchema';
import resolvers from '../resolvers';
const { makeExecutableSchema } = require('graphql-tools');


const RootQuery = `
  type RootQuery {
		job,
		message,
		account
  }
`;

const SchemaDefinition = `
  schema {
    query: {
      Job,
			Message,
			Account
    }
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Job, Message, Account],
  resolvers: resolvers
});

export default schema;
