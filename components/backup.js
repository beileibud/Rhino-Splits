import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import viewUserSend from '../contax/mergeData';
import { getSingleUser } from '../contax/userData';

const UserCard = ({ userId, users }) => {
  // const [users, setUser] = useState(null);
  // const [send, setSend] = useState(null);
  const router = useRouter();
  console.warn({users})
  useEffect(() => {
    if (userId) { 
      console.warn('No userId');
      getSingleUser(userId)
        .then(userData => setUser(userData))
        .catch(error => {
          console.error('Error fetching user:', error);
        });

      viewUserSend(userId)
        .then(sendData => {
          if (sendData.send && sendData.send.length > 0) {
            setSend(sendData.send[0]);
          }
        })
        .catch(error => {
          console.error('Error fetching send:', error);
        });
    }
  }, [userId]);
  
  // if (!user || !send) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Card style={{ width: '18rem', marginBottom: '1rem' }}>
      <Card.Body>
        {/* <Card.Title> */}
          <img
            src={users.image}
            alt={users.name}
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          />{' '}
          {users.name}
        {/* </Card.Title> */}
        {/* <Card.Text>{send?.note}</Card.Text> */}
        <div className="d-flex justify-content-between align-items-center">
          {/* <Card.Text>{send.date}</Card.Text> */}
          <div>
            {/* <Card.Text>${send.amount}</Card.Text> */}
            <i
              className="bi bi-arrow-right-circle-fill"
              style={{ cursor: 'pointer' }}
              onClick={() => router.push(`/user/${userId}`)}
            ></i>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
