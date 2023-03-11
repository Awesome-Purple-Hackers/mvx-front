import Image from 'next/image';
import React from 'react';
import Card from '../Card';

const InventoryItem = ({ name, url }: { name: string; url: string }) => {
  return (
    <div className="w-full p-5 rounded-lg bg-zinc-900">
      <div className="mb-2">
        <p className="text-xl ">{name}</p>
        <p className="text-xs">Rare</p>
      </div>
      <Image alt="NFT" src={url} height="150" width="150" />
    </div>
  );
};

export default InventoryItem;
