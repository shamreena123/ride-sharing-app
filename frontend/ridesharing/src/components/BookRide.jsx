import React, { useState, useEffect } from 'react';
import './BookRide.css';
import AppNavbar from './AppNavbar';

const BookRide = () => {
  const [rides, setRides] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [bookedRides, setBookedRides] = useState([]);

  useEffect(() => {
    fetch('/rides.json')
      .then((response) => response.json())
      .then((data) => setRides(data));
    
    const storedRides = JSON.parse(localStorage.getItem('bookedRides')) || [];
    setBookedRides(storedRides);
  }, []);

  const handleSearch = () => {
    const results = rides.filter(ride => ride.from === from && ride.to === to);
    setSearchResults(results);
  };

  const handleBookRide = (ride) => {
    const updatedBookedRides = [...bookedRides, {
      ...ride,
      driverName: 'John Doe', 
      driverPhoneNumber: '+123456789',
      vehicleNumber: 'AB123CD'
    }];
    setBookedRides(updatedBookedRides);
    
    localStorage.setItem('bookedRides', JSON.stringify(updatedBookedRides));

    alert('Ride booked successfully!');
  };

  return (
    <div>
      <AppNavbar/>
    
    <div className="book-ride-container">
      <h2>Book Your Ride</h2>
      <div className="form-container">
        <div className="form">
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div>
        {searchResults.length > 0 ? (
          searchResults.map((ride, index) => (
            <div key={index} className="ride-detail">
              <h3>{ride.from} &rarr; {ride.to}</h3>
              <p>Vehicle type: {ride.transportType}</p>
              <div className="ride-price">
                <span>Price: {ride.price}</span>
              </div>
              <button onClick={() => handleBookRide(ride)}>Book</button>
            </div>
          ))
        ) : (
          <p className="no-rides-message">No rides available for this route.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default BookRide;
