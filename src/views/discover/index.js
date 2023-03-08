import { Divider, Grid } from '@mui/material';
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from 'react';
import NFTCard from '../../components/NFTCard';
import NFTDetailsDialog from '../../components/NFTDetailsDialog';
import { NFTList } from '../../data/NFTList';
import clsx from "clsx";

const getNFTs = (delay = 2000) => new Promise((res, rej) => {
  setTimeout(() => {
    res(NFTList);
  }, delay);
});

const Discover = (props) => {
  const [nfts, setNFTs] = useState([]);
  const [dialog, setDialog] = useState(null);

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

  const handleCardClick = (id) => {
    setDialog(id);
  };

  return (
    <div 
      className={"container vh-100 bg-dark position-relative d-flex flex-column"}
      style={{ background: " radial-gradient(circle, rgba(68,32,99,1) 30%, rgba(43,35,61,1) 64%)"}}
    >
      <div className='p-40'>
        <p style={{ fontSize: "80px", fontWeight: 700, color: "#EFE" }}>
          Discover NFTs
        </p>
        <Divider className='border-white' sx={{ width: "47%" }} />
        <p className='text-white font_12_500 mt-10'>
          Dive in to the world of newly launched NFTs exclusively available different chains including ETHEREUM, POLYGON, SOLANA etc.
        </p>
      </div>
      <div className='p-sm-40 h-100 overflow-scroll'>
        <Grid container spacing={5}>
          {nfts.map((nft) => (
            <Grid item xs={12} sm={6} lg={3} md={4} className="col" key={nft.id}>
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