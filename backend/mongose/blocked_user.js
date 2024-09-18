const mongodb = require('mongoose')
const Schema = mongodb.Schema

const blockedSchema = new Schema({
    
    block_id: {
        type: String,
        auto: true,
        unique: true,
    },
    user_id: {
        type: String,
        required: true
    },
    block_user: {
        type: String,
        required: true
    },
    bloked_at: {
        type: Date,
        default: Date.now
    }
});

//Indexing
blockedSchema.index({
    block_id: 1,
    user_id: 1,
    blocked_at: -1,
});

module.exports = mongodb.model('Blocked', blockedSchema);

