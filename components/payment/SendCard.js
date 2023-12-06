import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSingleUser } from '../../contax/userData'; // Ensure this import is correct

const SendCard = ({ paymentDetails }) => {
  const [user, setUser] = useState(null);

  const { amount, note, userId } = paymentDetails;

  useEffect(() => {
    if (userId) {
      getSingleUser(userId)
        .then((fetchedUser) => setUser(fetchedUser))
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, [userId]);

  return (
    <div className="max-w-xs mx-auto bg-white p-4">
      <h3 className="mt-2 text-center text-lg leading-6 font-medium text-gray-900">{user?.name}</h3>
      <dl className="mt-2 text-sm text-gray-500 space-y-1">
        <dt className="text-green-500">Amount</dt>
        <dd>${amount}</dd>
        <dt className="text-green-500">Note</dt>
        <dd>{note}</dd>
      </dl>
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
  }).isRequired,
};

export default SendCard;
