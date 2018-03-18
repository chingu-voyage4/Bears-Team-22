import { mergeDeepWith } from 'ramda';
import jobResolvers from './jobResolvers';
// import messageResolvers from './messageResolvers';
// import accountResolvers from './accountResolvers';
// import { resolve } from 'path';

const rootResolvers = {};
const resolvers = mergeDeepWith(rootResolvers, jobResolvers);
export default resolvers;
