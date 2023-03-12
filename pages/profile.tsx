import React from 'react';
import Claim from '../components/game/Claim';
import Inventory from '../components/game/Inventory';
import { Navbar } from '../components/game/Navbar';
import Profile from '../components/game/Profile';
import { HeaderMenuButtons } from '../components/ui/HeaderMenuButtons';
import { useAccount } from '../hooks/auth/useAccount';

const ProfilePage = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div className="flex flex-col items-center justify-center">
        <Profile />
        <Claim />
        <Inventory />
      </div>
    </>
  );
};

export default ProfilePage;
