import React, { useEffect, useState } from 'react';
import './MyOrders.css';
import AppNavbar from './AppNavbar';

const MyOrders = () => {
  const [bookedRides, setBookedRides] = useState([]);

  useEffect(() => {
    const storedRides = JSON.parse(localStorage.getItem('bookedRides')) || [];
    setBookedRides(storedRides);
  }, []);

  const handleDeleteRide = (index) => {
    const updatedRides = bookedRides.filter((_, rideIndex) => rideIndex !== index);
    setBookedRides(updatedRides);
    localStorage.setItem('bookedRides', JSON.stringify(updatedRides));
    alert('Ride deleted successfully!');
  };

  const handleShareDetails = (ride) => {
    const message = `Ride Details:
From: ${ride.from}
To: ${ride.to}
Driver: ${ride.driverName}
Driver Phone: ${ride.driverPhoneNumber}
Vehicle Number: ${ride.vehicleNumber}
Price: ${ride.price}`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
        <AppNavbar/>
      <h2>My Orders</h2>
      {bookedRides.length > 0 ? (
        bookedRides.map((ride, index) => (
          <div key={index} className="ride-detail">
            <button
              onClick={() => handleDeleteRide(index)} 
              className="delete-button"
              style={{ backgroundColor: 'red' }}
            >
              Cancel Booking
            </button>
            <h3>{ride.from} &rarr; {ride.to}</h3>
            <p>Vehicle type: {ride.transportType}</p>
            <div className="ride-price">
              <span>Price: {ride.price}</span>
            </div>
            <button
              onClick={() => handleShareDetails(ride)}
              className="share-button"
            >
              Share Details
            </button>
          </div>
        ))
      ) : (
        <p>No booked rides available.</p>
      )}
    </div>
  );
};

export default MyOrders;


