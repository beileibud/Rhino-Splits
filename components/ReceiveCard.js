import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSingleUser } from '../contax/userData';
import getReceive from '../contax/receiveData';

const ReceiveCard = ({ receiveDetails }) => {
  const [user, setUser] = useState(null);
  const [, setReceive] = useState(null);
  const {
    amount = '', note, userId, date,
  } = receiveDetails; // Assuming 'type' is part of receiveDetails now

  useEffect(() => {
    if (userId) {
      getSingleUser(userId)
        .then((fetchedUser) => setUser(fetchedUser))
        .catch((error) => console.error('Error fetching user data:', error));
    }
    getReceive()
      .then((data) => setReceive(data))
      .catch((error) => console.error('Error fetching receive data:', error));
  }, [userId]);

  const formattedDate = date
    ? new Date(date).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
    : '';

  return (
    <div className="receive-card-container">
      {user && user.image && (
        <div className="receive-card-avatar">
          <img src={user.image} alt={user.name || 'User'} />
        </div>
      )}
      <div className="receive-card-date">{formattedDate}</div>
      <div className="receive-card-content">
        <div className="receive-card-money">${amount}</div>
        <div className="receive-card-note">{note}</div>
      </div>
    </div>
  );
};

ReceiveCard.propTypes = {
  receiveDetails: PropTypes.shape({
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    note: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    date: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default ReceiveCard;
