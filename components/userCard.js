import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getSingleUser } from '../contax/userData';
import { getUserSend } from '../contax/sendData';

const UserCard = ({ userId, ...users }) => {
  const [, setUser] = useState(null);
  const [send, setSend] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getSingleUser(userId).then(setUser).catch(console.error);
    getUserSend(userId)
      .then((data) => setSend(data[0]))
      .catch(console.error);
  }, [userId]);

  const amountClass = send?.amount >= 0 ? 'amount-positive' : 'amount-negative';

  return (
    <Card className="user-card">
      <Card.Body>
        <div className="card-title">
          <Image
            className="user-image"
            src={users?.image}
            alt={users?.name}
            width={50} // Specify a width
            height={50} // Specify a height
            layout="fixed" // or use "responsive" depending on your layout needs
          />
          <div>
            <Card.Title className="user-name">{users?.name}</Card.Title>
            <Card.Text className="send-note">{send?.note}</Card.Text>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Card.Text className="transaction-date">{send?.date}</Card.Text>
          <div>
            <Card.Text className={amountClass}>${send?.amount}</Card.Text>
            <NavigateNextIcon className="bi bi-arrow-right-circle-fill" onClick={() => router.push(`/user/${userId}/transactions`)} aria-label="View user" />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

UserCard.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default UserCard;
