const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User.js');
const Booking = require('./models/Booking.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require("dotenv").config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET || 'default_jwt_secret';


app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
}));


mongoose.connect(process.env.MONGO_URL);

app.get('/api/test', (req,res) =>{
    res.json('test ok');
});

app.post('/api/register', async (req,res) => {
    const {name,email,password} = req.body;
    try{
        const userDoc = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
        
    });
    res.json(userDoc);
    } catch(e){
        res.status(422).json(e);
    }
});

app.post('/api/login', async (req,res) => {
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    if(userDoc){
        const passOk = bcrypt.compareSync(password,userDoc.password);
        if(passOk) {
            jwt.sign({email:userDoc.email, 
                id:userDoc._id, 
                name:userDoc.name}, jwtSecret, {}, (err,token) =>{
                if(err) throw err;
                res.cookie('token', token ).json(userDoc);
            });
        }else{
            res.status(422).json('Pass not Ok');
        }
    }else{
        res.status(100).json('User not found');

    }
})

app.get('/api/profile', (req,res) =>{
    const {token} = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const {name,email,_id} = await User.findById(userData.id);
      res.json({name,email,_id});
    });
  } else {
    res.json(null);
  }
});

app.post('/api/logout',(req,res) => {
    res.cookie('token','').json(true);
});

app.post('/api/searchMap',(req,res) => {
    const search = req.body.inputValue; 
    const a='https://maps.google.co.uk/maps?q=';
    const b='&amp;output=embed';
    const modified = search.split(' ').join('+');
    const fullmod = a+modified+b;
    res.json(fullmod);
});

app.post('/api/bookslot', async (req,res) => {
    const {slotNumber,startTime,endTime,email} = req.body;
    const user = await User.findOne({ email });
    if(user){
      const existingSlot = await Booking.findOne({slotNumber:slotNumber,startTime:startTime,endTime:endTime,bookingStatus:'booked'})
      if(!existingSlot){
        const userDoc = await Booking.create({
          slotNumber: slotNumber,
          startTime: startTime,
          endTime: endTime,
          bookingStatus: "booked"
        })
        user.bookings.push(userDoc._id);
        res.status(200).json({ success: true, bookingDetails: {slotNumber:slotNumber,startTime:startTime,endTime:endTime,bookingStatus:'booked', id: userDoc._id} });
      } else {
         res.status(400).json({ success: false, message: 'Slot is not available' });
       }
    } else {
       res.status(400).json({ success: false, message: 'User not found' });
    }
      
    // if (us) {
    //   const existingSlot = await Booking.findOne({slotNumber:slotNumber, bookingStatus: 'booked' });
    //   if (!existingSlot) {
    //     const newBooking = new Booking({
    //       slotNumber: slotNumber,
    //       bookingStatus: 'booked'
    //     });
    //     await newBooking.save();
    //     us.bookings.push(newBooking._id);
    //     await us.save();
    //     res.status(200).json({ success: true, bookingDetails: {slotNumber: slotNumber,} });
    //   } else {
    //     res.status(400).json({ success: false, message: 'Slot is not available' });
    //   }
    // } else {
    //   res.status(400).json({ success: false, message: 'User not found' });
    // }
  });

  app.post('/cancelslot', async (req, res) => {
    const { id } = req.body;
    const booking = await Booking.findById(id);
    if (booking) {
      const now = new Date();
      if (booking.startTime > now) {
        await Booking.updateOne({_id: id}, {bookingStatus: "canceled"});
        res.status(200).json({ success: true, message: 'Booking canceled' });
      } else {
        res.status(400).json({ success: false, message: 'Cannot cancel booking, booking has already started' });
      }
    } else {
      res.status(400).json({ success: false, message: 'Booking not found' });
    }
  });

    app.get('/mybookings', async (req, res) => {
        try {
          const userId = req.user.email; // assuming you have middleware that sets req.user to the authenticated user's information
          const user = await UserModel.findById(userId);
          res.status(200).json(user.bookingDetails);
        } catch (err) {
          console.log(err);
          res.status(500).send('Error retrieving booking details');
        }
      });

    app.listen(4000,function(){
    console.log("server is up in port 4000");
});

module.exports = app;