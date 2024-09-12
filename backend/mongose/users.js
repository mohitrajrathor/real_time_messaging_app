const mongodb = require('mongoose')
const Schema = mongodb.Schema

const userSchema = new Schema({
    
    user_id: {
        type: String,
        auto: true,
        unique: true,
    },
    username: {
        type: String,
        required: [true, "please specify user role"],
        trim: true,
        unique: [true, "Username must be unique"],
        minlength: [3, "Username must be containing atleast 3 characters"],
        minlength: [50, "Username can containing upto 50 characters"]
    },
    email: {
        type: String,
        unique: [true, "email exists in database!"],
        lowercase: true,
        trim: true,
        required: [true, "Email is required"],
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: '{value} is not a valid email!'
        }
    },
    password_hash: {
        type: String,
        required: [true, "Password is required"]
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    last_login: {
        type: Date
    },
    status: {
        type: String,
        enum: ["active", "inactive", "suspended"],
        default: "active"
    }
});

//Indexing
userSchema.index({
    email: 1,
    username: 1,
    last_login: -1,
});

module.exports = mongodb.model('User', userSchema);

