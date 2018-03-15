import mongoose, { Schema } from 'mongoose';
//import autoIncrement from 'mongodb-autoincrement';

 export const jobSchema = new Schema({
   id: { type: Number },
   positionName: { type: String, required: [true, 'The position name is mandatory'], trim: true },
},
{ timestamps: true, }
);

//jobSchema.plugin(autoIncrement.mongoosePlugin);
const jobModel = mongoose.model('jobs', jobSchema);
export default jobModel;
