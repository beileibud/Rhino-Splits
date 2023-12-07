import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { createSend } from '../../contax/sendData';

const PaymentForm = ({ onSubmitDetails }) => {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Assuming 'userId' is passed as a query parameter
    if (router.query.userId) {
      setUserId(router.query.userId);
    }
  }, [router.query.userId]);

  const handleSubmit = async () => {
    const details = {
      amount,
      note,
      userId,
      date: new Date().toISOString(),
    };

    try {
      // Call the createSend API and wait for the response
      const sendResponse = await createSend(details);

      // Handle the response (this could be navigating to another page, showing a success message, etc.)
      // For example, you might want to call onSubmitDetails with the response
      onSubmitDetails(sendResponse);

      // Optionally, navigate to another page or update the state
      // router.push('/some-success-page');
    } catch (error) {
      console.error('Error creating send:', error);
      // Handle the error (show an error message, etc.)
    }
  };

  return (
    <div className="p-4 max-w-xs mx-auto">
      <div className="mb-3">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input type="number" name="amount" id="amount" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="note" className="block text-sm font-medium text-gray-700">
          Note
        </label>
        <textarea id="note" name="note" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Add a note" value={note} onChange={(e) => setNote(e.target.value)} />
      </div>
      <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm" onClick={handleSubmit}>
        Pay
      </button>
    </div>
  );
};

PaymentForm.propTypes = {
  onSubmitDetails: PropTypes.func.isRequired, // Define the expected type for onSubmitDetails
};

export default PaymentForm;
