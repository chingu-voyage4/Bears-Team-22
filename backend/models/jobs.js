import mongoose, { Schema } from 'mongoose';

 const JobSchema = new Schema({
   id: { type: Number, },
   positionName: { type: String, required: [true, 'The position name is mandatory'], trim: true },
   jobTitle: { type: String, required: [true, 'The job title is mandatory'], trim: true },
   company: { type: Schema.Types.ObjectId, ref: 'Company' },
   country: { type: String, required: [true, 'The country is mandatory'], trim: true },
   employmentType: { type: String, required: [true, 'The employment type is mandatory'] },
   jobFunction: { type: String, required: [true, 'The job function is mandatory'] },
   jobDescription: { type: String }
},
{ timestamps: true, }
);

module.exports = mongoose.model('Jobs', JobSchema);



