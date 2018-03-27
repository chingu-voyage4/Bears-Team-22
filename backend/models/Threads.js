import mongoose, { SchemaTypes as Types } from 'mongoose';

const ThreadSchema = new mongoose.Schema({
    id: Types.ObjectId,
    members: [String],
    company: {
      id: Types.ObjectId,
      ref: "Account"
    },
    employee: {
      id: Types.ObjectId,
      ref: "Account"
    },
    messages: [{
        id: Types.ObjectId,
        ref: "Message"
    }]
},
{
    timestamps: true
})

export default mongoose.model('Thread', ThreadSchema);