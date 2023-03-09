import { Divider, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import FullScreenLoader from '../../components/FullScreenLoader';
import NFTCard from '../../components/NFTCard';
import NFTDetailsDialog from '../../components/NFTDetailsDialog';
import NFTLIST from '../../data/getNftList';

const getNFTs = (delay = 2000) => new Promise(async(res, rej) => {
  const { data } = NFTLIST;
  setTimeout(() => {
    res(data);
  }, delay);
});

const Discover = (props) => {  
  const [nfts, setNFTs] = useState([]);
  const [dialog, setDialog] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNFTs() {
      try {
        const fetchedNFTs = await getNFTs();
        setNFTs(fetchedNFTs);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNFTs();
  }, []);

  const handleCardClick = (id) => {
    setDialog(id);
  };

  if(isLoading) return <FullScreenLoader />;
  return (
    <div 
      className={"container position-relative d-flex flex-column py-10"}
      style={{ background: " radial-gradient(circle, rgba(68,32,99,1) 30%, rgba(43,35,61,1) 64%)"}}
    >
      <div className='p-sm-40 p-20'>
        <Typography style={{ fontSize: "80px", fontWeight: 700 }} className="text-white">
          Discover NFTs
        </Typography>
        <Divider className='border-white' sx={{ width: "47%" }} />
        <Typography className='text-white font_12_500 mt-10'>
          Dive in to the world of newly launched NFTs exclusively available different chains including ETHEREUM, POLYGON, SOLANA etc.
        </Typography>
      </div>
      <div className='p-20 p-sm-40 h-100 overflow-scroll d-flex justify-content-center mt-20'>
        <Grid container spacing={5}>
          {nfts.map((nft) => (
            <Grid item xs={12} sm={6} lg={3} md={4} key={nft.id}>
              <NFTCard nft={nft} key={nft.id} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      </div>
      {!!dialog && <NFTDetailsDialog nft={dialog} onClose={() => setDialog(null)} />}
    </div>
  );
}

export default Discover;