import React, { useState, useEffect } from 'react';
import ReceiveCard from '../components/ReceiveCard';
import getReceive from '../contax/receiveData';

function Home() {
  const [receives, setReceives] = useState([]);

  useEffect(() => {
    getReceive()
      .then((data) => setReceives(data)) // Assuming getReceive returns an array of receive details
      .catch((error) => console.error('Error fetching receives:', error));
  }, []);

  return (
    <div>
      {receives.map((receiveDetails) => (
        <ReceiveCard key={receiveDetails.id} receiveDetails={receiveDetails} />
      ))}
    </div>
  );
}

export default Home;
