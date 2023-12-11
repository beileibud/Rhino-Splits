import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import SendCard from '../../../components/payment/SendCard';
import { getSingleUser } from '../../../contax/userData';
import { getUserAllSends } from '../../../contax/sendData'; // Ensure you have this function defined to fetch sends
import ReceiveCard from '../../../components/ReceiveCard';
import getReceive from '../../../contax/receiveData';

function BetweenUser() {
  const router = useRouter();
  const { userId } = router.query;
  const [, setUserData] = useState(null); // This state will hold the user data
  const [allSends, setAllSends] = useState([]); // This state will hold all the send transactions
  const [receives, setReceives] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (userId) {
      getSingleUser(userId).then(setUserData);

      // Fetch all send transactions for the user and add type
      getUserAllSends(userId).then((sendsData) => {
        const sendsWithType = sendsData.map((send) => ({ ...send, type: 'send' }));
        setAllSends(sendsWithType);
      });

      // Fetch all receive transactions and add type
      getReceive().then((receivesData) => {
        const receivesWithType = receivesData.map((receive) => ({ ...receive, type: 'receive' }));
        setReceives(receivesWithType);
      });
    }
  }, [userId]);

  useEffect(() => {
    // Combine and sort the transactions whenever allSends or receives update
    const combinedTransactions = [...allSends, ...receives]
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    setTransactions(combinedTransactions);
  }, [allSends, receives]);

  return (
    <div className="between-page">
      {transactions.map((transaction) => (
        transaction.type === 'send' ? (
          <SendCard key={transaction.id} paymentDetails={transaction} />
        ) : (
          <ReceiveCard key={transaction.id} receiveDetails={transaction} />
        )
      ))}
    </div>
  );
}

export default BetweenUser;
