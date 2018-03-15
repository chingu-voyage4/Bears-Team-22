import { mergeDeepWith, concat} from 'ramda';
import jobResolvers from './jobResolvers';
import messageResolvers from './messageResolvers';
import { resolve } from 'path';

const rootResolvers = {};
const resolvers = mergeDeepWith(concat, jobResolvers, messageResolvers);

export default resolvers;
