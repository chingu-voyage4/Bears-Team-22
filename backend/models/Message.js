import mongoose, { SchemaTypes as Types } from 'mongoose';

const MessageSchema = new mongoose.Schema({
    id: Types.ObjectId,
    thread: { type: String, ref: "Thread" },
    sender: String,
    receiver: String,
    text: String,
    seen: { type: Boolean, default: false }
}, {
   timestamps: true 
})

export default mongoose.model('Message', MessageSchema);