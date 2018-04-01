import Message from '../../models/Message'
import { Types } from 'mongoose'

export default {
  Query: {
    message(_, { id }) {
      return Message.findOne({ id })
        .then(message => message)
        .catch(err => err)
    },

    threadMessages(_, { threadId }) {
      return Message.find({ threadId })
        .then(message => message)
        .catch(err => err)
    },

    messages(one, args, context, ...rest) {
      console.log(one)
      console.log(args)
      console.log(context)
      console.log(rest)
      return Message.find()
        .then(messages => messages)
        .catch(err => err)
    }
  },

  Mutation: {
    createMessage(_, args) {
      const id = new Types.ObjectId()
      return Message.create({ id, ...args })
        .then(message => message)
        .catch(err => err)
    }
  }
}
