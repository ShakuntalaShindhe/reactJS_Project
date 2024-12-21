
import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('ReservedTable')) || [];
    setReservations(storedData);
  }, []);

  return (
    <>
      <div className="contact-container">
        <h1 className='resevation'>Reservations</h1>
        {reservations.length > 0 ? (
          <table className="reservation-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Persons</th>
                <th>Date</th>
                <th>Time</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={index}>
                  <td>{reservation.name}</td>
                  <td>{reservation.number}</td>
                  <td>{reservation.person}</td>
                  <td>{reservation.date}</td>
                  <td>{reservation.time}</td>
                  <td>{reservation.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No reservations found.</p>
        )}
      </div>
      <h1>Contact Us</h1>
      <div className='container'>
        <div className='details'>
          <p>Booking request</p>
          <h2>+88-123-123456</h2>
          <p>Location<br></br>
            opposite to snehapuri park VST colony Nacharam Hyderabad
          </p>
          <h4>Lunch Time<br></br>
            <span>Monday to Sunday<br></br>
              11.00 am - 2.30pms
            </span>
          </h4>
          <h4>Dinner Time<br></br>
            <span>
              Monday to Sunday<br></br>
              05.00 pm - 10.00pm
            </span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Contact;