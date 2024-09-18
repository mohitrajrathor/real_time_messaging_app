const mongodb = require('mongoose')
const Schema = mongodb.Schema

const notificationSchema = new Schema({
    
    notification_id: {
        type: String,
        auto: true,
        unique: true,
    },
    user_id: {
        type: String,
        ref: 'Users',
        required: true
    },
    content: {
        type: String,
        required: [true, "please specify user role"]
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    read_at: {
        type: Date,
        default: Date.now
    }
});

//Indexing
notificationSchema.index({
    notification_id: 1,
    user_id: 1,
    created_at: -1,
    read_at: -1
});

module.exports = mongodb.model('Notifications', notificationSchema);

