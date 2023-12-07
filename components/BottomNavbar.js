import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import PeopleIcon from '@mui/icons-material/People';
import { useRouter } from 'next/router';

export default function BottomNavbar() {
  const router = useRouter();
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    router.push(`/${newValue}`);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} showLabels>
      <BottomNavigationAction label="Pay" value="select" icon={<PaymentIcon />} />
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Transactions" value="profle" icon={<SwapHorizIcon />} />
      <BottomNavigationAction label="Friends" value="friends" icon={<PeopleIcon />} />
    </BottomNavigation>
  );
}
