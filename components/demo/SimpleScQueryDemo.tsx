import { useEffect } from 'react';
import { useScQuery, SCQueryType } from '../../hooks/core/useScQuery';
import { networkConfig, chainType } from '../../config/network';
import { shortenHash } from '../../utils/shortenHash';
import { ActionButton } from '../tools/ActionButton';

const mintSmartContractAddress =
  process.env.NEXT_PUBLIC_MINT_SMART_CONTRACT_ADDRESS || '';
const queryFunctionName = process.env.NEXT_PUBLIC_QUERY_FUNCTION_NAME || '';

export const SimpleScQeryDemo = ({
  cb,
}: {
  cb: (queryResult: string, pending: boolean, error: string) => void;
}) => {
  const {
    data: queryResult,
    fetch, // you can always trigger the query manually if 'autoInit' is set to false
    isLoading, // pending state for initial load
    isValidating, // pending state for each revalidation of the data, for example using the mutate
    error,
  } = useScQuery<number>({
    type: SCQueryType.NUMBER, // can be int or string
    payload: {
      scAddress: mintSmartContractAddress,
      funcName: queryFunctionName,
      args: [],
    },
    autoInit: false, // you can enable or disable trigger of the query on component mount
  });

  useEffect(() => {
    if (queryResult !== undefined && queryResult !== null) {
      cb?.(queryResult.toString(), isLoading || isValidating, error);
    }
  }, [cb, error, isLoading, isValidating, queryResult]);

  return (
    <div className="p-6 rounded-xl bg-dark-darker flex-1 flex flex-col text-center items-center justify-center">
      <p className="mb-4">
        3. You will be querying the smart contract for NFT tokens left to mint:{' '}
        <br />
        <a
          href={`${networkConfig[chainType].explorerAddress}/accounts/${mintSmartContractAddress}`}
          className="font-bold"
        >
          {shortenHash(mintSmartContractAddress, 8)}
        </a>{' '}
        <br />
        (devnet)
      </p>
      <ActionButton disabled={isLoading || isValidating} onClick={fetch}>
        Query
      </ActionButton>
    </div>
  );
};
