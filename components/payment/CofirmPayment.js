import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getSingleUser } from '../../contax/userData'; // Ensure this import is correct

const ConfirmPayment = ({ paymentDetails }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const { amount, note, userId } = paymentDetails;

  useEffect(() => {
    if (userId) {
      getSingleUser(userId)
        .then((fetchedUser) => setUser(fetchedUser))
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, [userId]);

  const handleConfirm = () => {
    // Implement the logic to submit the payment details
    router.push('/home');
  };

  return (
    <div className="max-w-xs mx-auto bg-white p-4">
      {user ? (
        <>
          <img className="h-20 w-20 rounded-full mx-auto" src={user.image} alt={user.name} />
          <h3 className="mt-2 text-center text-lg leading-6 font-medium text-gray-900">{user.name}</h3>
          <dl className="mt-2 text-sm text-gray-500 space-y-1">
            <dt className="text-green-500">Amount</dt>
            <dd>${amount}</dd>
            <dt className="text-green-500">Note</dt>
            <dd>{note}</dd>
          </dl>
          <button
            type="button"
            className="mt-5 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            onClick={handleConfirm}
          >
            Confirm & Send
          </button>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

ConfirmPayment.propTypes = {
  paymentDetails: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
};

export default ConfirmPayment;
