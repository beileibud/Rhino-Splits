import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ConfirmPayment from '../../components/payment/CofirmPayment';
import PaymentForm from '../../components/payment/PaymentForm';
import { getSingleUser } from '../../contax/userData';

function UserPayment() {
  const router = useRouter();
  const { userId } = router.query;
  const [userData, setUserData] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(true);
  const [paymentDetails, setPaymentDetails ] = useState({});

  useEffect(() => {
    if (userId) {
      getSingleUser(userId)
        .then(data => setUserData(data))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [userId]);

  const handlePaymentDetails = (details) => {
    setPaymentDetails(details);
    setShowPaymentForm(false);
  };

  return (
    <div>
      {userData && showPaymentForm && (
        <PaymentForm userId={userId} userData={userData} onSubmitDetails={handlePaymentDetails} />
      )}
      {userData && !showPaymentForm && <ConfirmPayment paymentDetails={paymentDetails}/>}
    </div>
  );
}

export default UserPayment;
