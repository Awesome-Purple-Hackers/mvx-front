import React, { useEffect } from 'react';
import { useAccount } from '../../../hooks/auth/useAccount';
import { useLogin } from '../../../hooks/auth/useLogin';
import { MultiversXService, Response } from '../../sdk/multiversXService.sdk';

import { useLoginInfo } from '../../../hooks/auth/useLoginInfo';
import Button from '../Button';
import Card from '../Card';

const Profile = () => {
  const { address } = useAccount();

  // console.log(' info', address);

  return (
    <div className="w-full">
      <Card>
        <div className="mb-5">
          <p className="text-xl">
            {
              // first and last 5 characters of address
              address.slice(0, 5) + '...' + address.slice(-5)
            }
          </p>
          <p className="text-xs cursor-pointer">View on Explorer</p>
        </div>
        <Button customClassName="bg-red-500 ">Log out</Button>
      </Card>
    </div>
  );
};

export default Profile;
