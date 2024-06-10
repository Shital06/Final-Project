import React, { useState } from 'react';
function BookingForm(props){
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit =(e) =>{
    e.preventDefault();
    props.SubmitForm(e);
  }
  const handleChange = (e) =>{
    setDate(e);
    props.dispatch(e);
          
  }
    return(
      <header>
        <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => handleChange(e.target.value)} required />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        
            <option value="">Select a Time</option>
            {
                props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
            }
        
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) =>
        setGuests(e.target.value)
      } required/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input aria-label='On Click' className='btnReceive' type="submit" value="Make Your reservation"/>
      </fieldset>
    </form>
    </section>
    </header>
    )
}
export default BookingForm;