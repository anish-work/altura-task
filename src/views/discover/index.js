import React, { useState, useEffect } from 'react';
import NFTCard from '../../components/NFTCard';
import { NFTList } from '../../data/NFTList';

const getNFTs = (delay = 2000) => new Promise((res, rej) => {
  setTimeout(() => {
    res(NFTList);
  }, delay);
});

const Discover = (props) => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    async function fetchNFTs() {
      try {
        const fetchedNFTs = await getNFTs();
        setNFTs(fetchedNFTs);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNFTs();
  }, []);
  console.log(nfts, '>>')
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">NFT Marketplace</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {nfts.map((nft) => (
          <div className="col" key={nft.id}>
            <NFTCard nft={nft} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;