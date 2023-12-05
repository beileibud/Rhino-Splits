import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { getUsers } from '../contax/userData';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(usersData => {
      console.log('User data:', usersData);
      setUsers(usersData);
    }).catch(error => {
      console.error('Error fetching users:', error);
      // Handle errors appropriately
    });
  }, []);

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} userId={user.id} {...user} />
      ))}
    </div>
  );
}

export default Home;
