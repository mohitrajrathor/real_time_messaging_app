const mongodb = require('mongoose')
const Schema = mongodb.Schema

const userSettingSchema = new Schema({
    
    user_id: {
        type: String,
        ref: 'Users',
        required: true
    },
    setting_key: {
        type: String,
        required: true
    },
    setting_value: {
        type: String,
        required: true
    }
});

//Indexing
userSettingSchema.index({
    user_id: 1
});

module.exports = mongodb.model('UserSettings', userSettingSchema);

