import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSingleUser } from '../../contax/userData';
import getAdmin from '../../contax/adminData'; // Import the getAdmin function

const SendCard = ({ paymentDetails }) => {
  const [, setUser] = useState(null);
  const [admin, setAdmin] = useState(null); // State to hold admin data

  const { amount, note, userId, date } = paymentDetails;

  useEffect(() => {
    if (userId) {
      getSingleUser(userId)
        .then((fetchedUser) => setUser(fetchedUser))
        .catch((error) => console.error('Error fetching user data:', error));
    }
    // Fetch admin data
    getAdmin()
      .then((fetchedAdmins) => {
        const adminData = fetchedAdmins[0]; // Get the first admin object
        setAdmin(adminData);
      })
      .catch((error) => console.error('Error fetching admin data:', error));
  }, [userId]);

  // Assuming date is passed in paymentDetails
  const formattedDate = date ? new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }) : '';

  return (
    <div className="send-card-container">
      <div className="send-card-date">{formattedDate}</div>
      <div className="send-card-content">
        <div className="send-card-amount-note">
          <span className="send-card-money-icon">$</span>
          <span className="send-card-amount">{amount}</span>
          <div className="send-card-note">{note}</div>
        </div>
        <div className="send-card-like"></div> {/* Placeholder for like icon */}
      </div>
      {admin && admin.avatar && (
        <img
          className="send-card-admin-avatar"
          src={admin.avatar}
          alt="Admin"
        />
      )}
    </div>
  );
};

SendCard.propTypes = {
  paymentDetails: PropTypes.shape({
    amount: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    note: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    date: PropTypes.string, // Make sure date is included in paymentDetails
  }).isRequired,
};

export default SendCard;
