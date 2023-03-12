import { Address, TransactionPayload } from '@multiversx/sdk-core/out';
import React from 'react';
import { SC_ADDRESS } from '../../../config/constants';
import { useAccount } from '../../../hooks/auth/useAccount';
import { SCQueryType, useScQuery } from '../../../hooks/core/useScQuery';
import { useTransaction } from '../../../hooks/core/useTransaction';
import Button from '../Button';
import Card from '../Card';

const Claim = () => {
  const { pending, triggerTx, transaction } = useTransaction();
  const { address, nonce, balance } = useAccount();
  const {
    data: queryResult,
    fetch, // you can always trigger the query manually if 'autoInit' is set to false
    isLoading, // pending state for initial load
    isValidating, // pending state for each revalidation of the data, for example using the mutate
    error,
  } = useScQuery<number>({
    type: SCQueryType.NUMBER, // can be NUMBER, STRING, BOOLEAN or COMPLEX
    payload: {
      scAddress: SC_ADDRESS,
      funcName: 'getWhitelist',
      args: [new Address(address).hex()],
    },
    autoInit: true, // you can enable or disable the trigger of the query on the component mount
  });

  console.log('queryResult', queryResult, error);

  const handleSendTx = () => {
    const demoMessage = 'mintRandom';
    triggerTx({
      address: SC_ADDRESS,
      gasLimit: 10000000,
      data: new TransactionPayload(demoMessage),
      value: 0,
    });
  };

  const handleClaim = async () => {};
  return (
    <div className="w-full">
      <Card>
        {queryResult > 0 ? (
          <>
            <div className="mb-7">
              <p className="text-xl">You can claim {queryResult} NFTs!</p>
              <p className="text-sm">
                Good job, traveler! You can now claim your items on the
                blockchain.
              </p>
            </div>
            <div className="w-full">
              <Button
                onClick={() => handleSendTx()}
                customClassName="bg-blue-500 w-full"
              >
                Claim
              </Button>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </Card>
    </div>
  );
};

export default Claim;
