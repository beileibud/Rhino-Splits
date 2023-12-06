import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SendCard from '../../../components/payment/SendCard';
import { getSingleUser } from '../../../contax/userData';
import { getUserAllSends } from '../../../contax/sendData'; // Ensure you have this function defined to fetch sends

function BetweenUser() {
  const router = useRouter();
  const { userId } = router.query;
  const [, setUserData] = useState(null); // This state will hold the user data
  const [allSends, setAllSends] = useState([]); // This state will hold all the send transactions

  useEffect(() => {
    if (userId) {
      getSingleUser(userId)
        .then((data) => setUserData(data))
        .catch((error) => console.error('Error fetching user data:', error));

      // Fetch all send transactions for the user
      getUserAllSends(userId)
        .then((sends) => setAllSends(sends)) // Assuming this returns an array of send transactions
        .catch((error) => console.error('Error fetching sends:', error));
    }
  }, [userId]);

  console.warn(userId);

  // You don't seem to need handlePaymentDetails for this page
  // Remove it if it's not used

  return (
    <div>
      {/* Map through allSends to render SendCard for each transaction */}
      {allSends.map((sendDetails) => (
        <SendCard key={sendDetails.id} paymentDetails={sendDetails} />
      ))}
    </div>
  );
}

export default BetweenUser;
