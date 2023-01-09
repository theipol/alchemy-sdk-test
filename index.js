// Setup: npm install alchemy-sdk
import { Alchemy } from "alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  url: "https://eth-mainnet.g.alchemy.com/nft/v2/{your_private_key}", // Replace with your Alchemy API Key.
};

try {
  const alchemy = new Alchemy(settings);

  // Print all spam NFT contracts returned in the response:
  const res = await alchemy.nft.getSpamContracts();
  console.log(res);
} catch (err) {
  console.log(err);
}
