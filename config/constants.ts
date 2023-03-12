// This configuration file keeps all UI constants and settings

// Your Dapp hostname example: https://www.mydapp.com it should come from env vars
export const dappHostname = process.env.NEXT_PUBLIC_DAPP_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: 'MultiversX NextJS dapp demo - MultiversX blockchain',
  description: 'Open source Dapp template for the MultiversX blockchain.',
  image: `${dappHostname}/og-image.png`,
};

export const SC_ADDRESS =
  'erd1qqqqqqqqqqqqqpgqlrkaz6a4ke7s8zl5n6xg87dqkps4xem4j8dq29v86m';
