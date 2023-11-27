import React, { useState, useEffect } from 'react';
import pets from '../utils/data/data';

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(pets);
  }, []);

  return (
    <div>
      <h1>hello seesee</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <img src={item.imageUrl} alt={item.name} style={{ maxWidth: '200px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
