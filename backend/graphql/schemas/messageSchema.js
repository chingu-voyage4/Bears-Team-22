export default `
    type Message {
        id: String!,
        thread: String,
        sender: String,
        receiver: String,
        text: String,
        seen: Boolean,
        createdAt: Int,
        updatedAt: Int
    }

    extend type Query {
        messages: [Message],
        threadMessages(thread: String!): [Message],
        message(id: String!): Message  
    }

    type Mutation {
        createMessage(thread: String, sender: String, receiver: String, text: String, seen: Boolean) : Message
    }

    type Subscription {
        newMessage: Message!
    }
`;
