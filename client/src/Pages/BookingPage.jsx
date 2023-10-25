import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';


export default function BookingPage() {
  const {user} = useContext(UserContext);
  const [selected, setSelected] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [bookingStatus, setBookingStatus] = useState('unbooked');
  const [bookingDetails, setBookingDetails] = useState({slotNumber:null,startTime:'',endTime:''});
  const [bookingError, setBookingError] = useState(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [id, setId] = useState('')
  const [slot,setSlot] = useState('');

  useEffect(() => {
    const now = new Date();
    const endtime = new Date(bookingDetails.endTime);
    if(now>endtime){
      setBookingStatus('unbooked')
    }
  })

  const handleButtonClick = (index) => {
    setSelected(index);
  }

  //maps and button
  async function handleSearch(ev){
    ev.preventDefault();
    try{
       const resp = await axios.post('/searchMap', {inputValue});
       console.log(resp.data);
        setSearchData(resp.data);
        setInputValue('');
    }catch(e){
      console.log('not able to fetch');
    }

  }

  // booking
  async function handleBookSlot(e){
    e.preventDefault();
    if(confirm("Confirm Booking")){
      try{
        const response = await axios.post('/bookslot',{slotNumber:slot, startTime:startTime, endTime:endTime, email: user.email});
        setBookingDetails(response.data.bookingDetails);
        setBookingStatus('booked');
        setId(response.data.bookingDetails.id);
        setEndTime('');
        setStartTime('');
        setSlot('');
        console.log(response.message)
      }catch(e){
        if (e.response && e.response.status === 400) {

          alert(e.response.data.message);
        } else {
          alert('An error occurred, please try again later.',);
          console.log(e)
        }
        setBookingStatus('unbooked');
      }
    }
  };

  async function handleCancelBooking(e){
    e.preventDefault();
    if(confirm("Confirm Booking")){
      try{
        const response = await axios.post('/cancelslot',{ id: id });
        setBookingDetails(response.data);
        
        setBookingStatus('booked');
        
      }catch(e){
        console.log(e);
        setBookingStatus('unbooked');
      }
    }
    setBookingStatus('unbooked');
    setBookingDetails(null);
    setBookingError(null);
  };


  return (
    <div className='mt-28 align-middle'>
      <div className='text-4xl text-green-300 text-center '>
        <p className='underline decoration-4'>PARKING&nbsp;and&nbsp;CHARGING</p>
      </div>
      <div className='button-container'>
        <button onClick={() => handleButtonClick(0)}>Chennai</button>
        <button onClick={() => handleButtonClick(1)}>bangalore</button>
        <button onClick={() => handleButtonClick(2)}>Mumbai</button>
        <input type='url' className='text-black'
        placeholder='Location' 
        value={inputValue} 
        onChange={(ev) => setInputValue(ev.target.value)} />
        <button type='submit' id='ubutton'  onClick={(ev) => {handleSearch(ev); handleButtonClick(3);}}>search</button>
      </div>
      <div className='map-container'>
        {selected === 0 && <iframe title='Chennai Maps' width='100%' height='450px' src='https://maps.google.co.uk/maps?q=Chennai+Tamil+nadu+parking&amp;output=embed' />}
        {selected === 1 && <iframe title='Bengaluru Maps' width='100%' height='450px' src='https://maps.google.co.uk/maps?q=Bengaluru+Karnataka+parking&amp;output=embed' />}
        {selected === 2 && <iframe title='Mumbai Maps' width='100%' height='450px' src="https://maps.google.co.uk/maps?q=Mumbai+Maharashta+parking&amp;output=embed" />}
        {selected === 3 && <iframe title='random Maps' width='100%' height='450px' src={searchData} />}
      </div>
      <div className=' justify-around align-middle text-center pt-12'>
        
        <h1 className='text-3xl text-white'>BOOKING STATUS</h1>  <br/>  
        {bookingStatus === 'unbooked' && (
          <form onSubmit={handleBookSlot} className='p-8'>
            <label className='text-left text-white' htmlFor="slot">slotNumber:</label>
            <br/>
            <input type="number" placeholder='' name="slot"
            value={slot}
            onChange={(ev) => setSlot(ev.target.value)}
             required />
            <br/>
            <label className='text-left text-white' htmlFor="name">Start Time:</label>
            <br/>
            <input type="text" placeholder='eg. 2023-05-04 10:00:00' name="start time"
            value={startTime}
            onChange={(ev) => setStartTime(ev.target.value)}
             required />
            <br/>
            <label className="text-white" htmlFor="email">End Time:</label>
            <br/>
            <input type="text" placeholder='eg. 2023-05-04 11:00:00' name="end time"
            value={endTime}
            onChange={(ev) => setEndTime(ev.target.value)}
            required />

            <button className='bg-primary px-20 m-12 py-2 rounded-full' type="submit">Book Slot</button>
          </form>
        )}

        {bookingStatus === 'booked' &&(
          <div className='text-white p-8'>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Slot Number: {bookingDetails.slotNumber}</p>
            <p>Start Time: {bookingDetails.startTime}</p>
            <p>End Time: {bookingDetails.endTime}</p>
            <button className='bg-primary px-20 m-12 py-2 rounded-full' onClick={handleCancelBooking}>Cancel Booking</button>
          </div>
        )}
        {bookingError && <p>{bookingError}</p>}
      </div>
    </div>
  );
}