import React, { useState } from 'react';

const BookingForm = (props) => {
  const [date, setDate] = useState('');
  const [times, setTimes] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required />
            </div>

            {/* Time Selection */}
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            {/* Number of guests */}
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} />
            </div>

            {/* Occasion Field */}
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            {/* Submit button */}
            <div className="btnReceive">
              <input aria-label="On click" type="submit" value={'Make your Reservation'} />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
