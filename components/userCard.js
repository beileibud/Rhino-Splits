import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import { getSingleUser } from '../contax/userData';
import { getUserSend } from '../contax/sendData';

const UserCard = ({ userId, ...users }) => {
  const [, setUser] = useState(null);
  const [send, setSend] = useState([]);
  const router = useRouter();
  console.warn({ users });

  useEffect(() => {
    getSingleUser(userId)
      .then((userData) => setUser(userData))
      .catch((error) => {
        console.error('Error fetching user:', error);
      });

    getUserSend(userId)
      .then((sendData) => setSend(sendData[0]))
      .catch((error) => {
        console.error('Error fetching send:', error);
      });
  }, [userId]);

  console.warn(send);
  return (
    <Card>
      <div className="select-user-container">
        <div className="search-container" />
        <ul className="user-list">
          <img className="user-image" src={users.image} alt={users.name} />
          <div className="user-info">
            <p className="user-name">{users.name}</p>
          </div>
        </ul>
      </div>
      <Card.Text>{send?.note}</Card.Text>
      <div className="d-flex justify-content-between align-items-center">
        <Card.Text>{send?.date}</Card.Text>
        <div>
          <Card.Text>${send?.amount}</Card.Text>
          <button
            className="bi bi-arrow-right-circle-fill"
            style={{ cursor: 'pointer', background: 'none', border: 'none' }}
            onClick={() => router.push(`/user/${userId}`)}
            type="button"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                router.push(`/user/${userId}`);
              }
            }}
            aria-label="View user" // Added aria-label for accessibility
          /> {/* Corrected the closing tag alignment */}
        </div>
      </div>
    </Card>
  );
};

UserCard.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  // Add PropTypes validation for any other props as needed
};

export default UserCard;
