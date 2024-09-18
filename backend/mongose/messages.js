const mongodb = require("mongoose")
const Schema = mongodb.Schema

const messageSchema = new Schema({

    message_id: {
        type: Schema.Types.ObjectId,
        auto: true,
    },
    conversation_id: {
        type: Schema.Types.ObjectId,
        ref: 'Conversations',
        required: [true, "Conversation ID is require"]
    },
    sender_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: [true, "email exists in database!"]
    },
    content: {
        type: String,
        required: [true, "please specify user role"]
    },
    sent_at: {
        type: Date,
        default: Date.now
    },
    created: {
        type: String,
        enum: ["text", "image", "video", "file"],
        default: "text"
    }
});

//Indexing
messageSchema.index({message_id: 1, sent_at: -1});

module.exports = mongodb.Schema('Message', messageSchema)

