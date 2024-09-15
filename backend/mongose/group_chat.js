const mongodb = require('mongoose')
const Schema = mongodb.Schema

const groupSchema = new Schema({
    
    group_id: {
        type: String,
        auto: true,
        unique: true,
    },
    group_name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

//Indexing
groupSchema.index({
    group_id: 1,
    created_at: -1,
    updated_at: -1,
});

module.exports = mongodb.model('Groups', groupSchema);

