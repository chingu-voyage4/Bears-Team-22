import { merge } from 'ramda';
import jobResolvers from './jobResolvers';
import messageResolvers from './messageResolvers';

const rootResolvers = {  };
const resolvers = merge(jobResolvers, messageResolvers);
export default resolvers; 