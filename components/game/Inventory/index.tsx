import { useAtom } from 'jotai/react';
import React, { useEffect } from 'react';
import { useAccount } from '../../../hooks/auth/useAccount';
import { useApiCall } from '../../../hooks/core/useApiCall';
import { userNFTsAtom } from '../../../store/atom';
import InventoryItem from './Item';

const Inventory = () => {
  const items = ['Sword', 'Shield', 'Potion'];
  const [userNFTs, setUserNFTs] = useAtom(userNFTsAtom);
  const { address } = useAccount();

  const { data, isLoading, isValidating, fetch, error } = useApiCall<any>({
    url: `/accounts/${address}/nfts`, // can be any API path without the host, because the host is already handled internally
    autoInit: true, // similar to useScQuery
    type: 'get', // can be get, post, delete, put
    payload: {},
    options: {},
    // @ts-ignore
    // baseEndpoint: undefined, // any custom API endpoint, by default MultiversX API
  });

  useEffect(() => {
    data && data.length > 0 && setUserNFTs(data);
  }, [data, setUserNFTs]);

  console.log('userNFTs', userNFTs);

  return (
    <div className="flex flex-col justify-center w-4/5 mt-5">
      <p className="text-2xl">Inventory</p>
      <div className="p-8 space-y-2 rounded-lg bg-zinc-800">
        {userNFTs &&
          userNFTs.length > 0 &&
          userNFTs.map((item: any, index: any) => (
            <InventoryItem key={index} name={item.name} url={item.url} />
          ))}
      </div>
    </div>
  );
};

export default Inventory;
