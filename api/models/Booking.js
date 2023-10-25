const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    slotNumber: {
        type: Number,
        required: true
    },
    startTime: {
        type: Date,
        required: false
      },
      endTime: {
        type: Date,
        required: false
      },
      bookingStatus: [{
        type: String,
        enum: ['booked', 'canceled'],
        default: 'booked'
      }]
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;