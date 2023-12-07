import React, { useState, useEffect } from 'react';
import getAdmin from '../contax/adminData';

const AdminProfile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAdmin().then(setData);
  }, []);
  console.warn(data);

  return (
    <div>
      <h1>AdminProfile</h1>
      <ul>
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <img src={item.avatar} alt={item.name} style={{ maxWidth: '200px' }} />
            <p>Balance:{item.balance}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AdminProfile;
