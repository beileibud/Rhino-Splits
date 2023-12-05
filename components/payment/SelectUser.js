import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { getUsers } from '../../contax/userData';
import { TextField, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SelectUser = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  useEffect(() => {
    getUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers);
    });
  }, []);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filtered = users.filter((user) => user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredUsers(filtered);
  };

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
    router.push(`/user/${userId}`);
  };

  return (
    <div className="select-user-container">
      <div className="search-container">
        <IconButton onClick={() => router.push('/home')}>
          <ArrowBackIcon />
        </IconButton>
        <TextField fullWidth placeholder="Search by name" value={searchTerm} onChange={handleSearchChange} variant="outlined" size="small" />
      </div>
      <ul className="user-list">
        {filteredUsers.map((user) => (
          <li key={user.id} className="user-list-item" onClick={() => handleUserSelect(user.id)}>
            <img className="user-image" src={user.image} alt={user.name} />
            <div className="user-info">
              <p className="user-name">{user.name}</p>
            </div>
            <input type="radio" name="user" value={user.id} checked={selectedUserId === user.id} onChange={() => handleUserSelect(user.id)} className="form-radio" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectUser;
