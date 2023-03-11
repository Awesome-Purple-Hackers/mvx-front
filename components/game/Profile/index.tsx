import React from 'react';
import { useAccount } from '../../../hooks/auth/useAccount';
import { useLogin } from '../../../hooks/auth/useLogin';
import { useLoginInfo } from '../../../hooks/auth/useLoginInfo';
import Button from '../Button';
import Card from '../Card';

const Profile = () => {
  const { address } = useAccount();

  // console.log(' info', address);

  console.log('hi');

  return (
    <div className="w-4/5">
      <Card>
        <div className="mb-5">
          <p>
            {
              // first and last 5 characters of address
              address.slice(0, 5) + '...' + address.slice(-5)
            }
          </p>
          <p className="text-xs">View on Explorer</p>
        </div>
        <Button customClassName="bg-red-500 ">Log out</Button>
      </Card>
    </div>
  );
};

export default Profile;
