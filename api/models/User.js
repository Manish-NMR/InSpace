const mongoose = require('mongoose');
const {Schema} = mongoose;
const Booking = require("./Booking")

const UserSchema = new Schema({
    name: String,
    email: {type: String, unique:true},
    password: String,
    photo: String,
    bookings: [{
      type: Schema.Types.ObjectId,
      ref: 'Booking'
    }]
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;