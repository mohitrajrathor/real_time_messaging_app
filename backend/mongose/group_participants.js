const mongodb = require('mongoose')
const Schema = mongodb.Schema

const groupParticipantSchema = new Schema({
    
    group_participants_id: {
        type: String,
        auto: true,
        unique: true,
    },
    group_id: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
        require: true
    },
    joined_at: {
        type: Date,
        default: Date.now
    }
});

//Indexing
groupParticipantSchema.index({
    group_participants_id: 1,
    group_id: 1,
    user_id: 1,
    joined_at: -1,
});

module.exports = mongodb.model('GroupParticipants', groupParticipantSchema);

