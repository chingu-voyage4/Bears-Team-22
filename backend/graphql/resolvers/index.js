import { merge } from 'ramda';
import jobResolvers from './jobResolvers';


const rootResolvers = {  };
const resolvers = merge(rootResolvers,jobResolvers);
export default resolvers; 