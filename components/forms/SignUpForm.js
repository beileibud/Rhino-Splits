// components/SignUpForm.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';

const dbUrl = 'http://localhost:8088';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation logic here
    if (email && password) {
      try {
        const response = await fetch(`${dbUrl}/admin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Handle success here
        router.push('/home');
      } catch (error) {
        // Handle errors here
      }
    }
  };

  return (
    <div className="max-w-xs mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <TextField
            fullWidth
            id="email"
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete="email"
          />
        </div>
        <div className="mb-6">
          <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="current-password"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
