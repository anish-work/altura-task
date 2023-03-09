import { ArrowForwardIos, Verified } from '@mui/icons-material';
import { Avatar, Button, Card, CardMedia, Divider, IconButton, Tooltip, Typography } from '@mui/material';
import  { makeStyles } from "@mui/styles";
import clsx from 'clsx';

import React from 'react';
import { getChainIcon } from '../utils/icons';

const styles = makeStyles((theme) => ({
  nftCardRoot:{
    position: "relative",
    maxWidth: "400px", borderRadius: "12px", cursor: "pointer",
    transition: "all ease-in 0.2s",
    "&:hover":{
      translate: "0 -2%",
      backgroundColor: "f5f5f5",
      "& #card-media" : {
        backgroundSize: "105%",
      },
      "& #hover-button" :{
        transition: "all ease-in-out 0.2s",
        translate: "0px 0px",
      },
    }
  },
  hiddenButton:{
    padding: "10px",
    position: "absolute", bottom:"0px", right: 10, translate:"0 100%",
    borderRadius: "12px 12px 0px 0px", color: "white",
  },
}));

const NFTCard = (props) => {
  const { nft, onClick } = props;
  const { collection } = nft;
  const classes = styles();
  return (
    <Card classes={{root: classes.nftCardRoot}} onClick={(e) => onClick(nft)}>
      <div className='h-100 p-10 m-0 d-flex justify-content-between align-items-center'>
        <Tooltip title={`Collection: ${nft.collection.title}`}>
          <div className='d-flex'>
            <Avatar src={nft.collection.imageUrl} sx={{ width:"18px", height: "18px" }}/>
            <p className='text-grey font_13_500 mx-10'>
              {collection.title} {" "} {collection.isVerified && ( <Verified color='secondary' fontSize='12' />)}
            </p>
          </div>
        </Tooltip>
        {getChainIcon(nft.chain)}
      </div>
      <CardMedia
        sx={{
          borderRadius: "12px 12px 0px 0px", 
          height: 0, 
          paddingTop: '75%',
          background: '#eee',
          backgroundOrigin: 'border-box',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          transition: "all ease-in 0.2s",
        }}
        id="card-media"
        image={nft.media.image}
        title={nft.title}
      />
      <div className='p-10'>
        <Typography className='font_20_600 me-20'>
          {nft.title}
        </Typography>
        <Divider className='border-dark w-50 mt-5' />
        <Typography className='font_13_700 mt-8 text-primary' >
          {nft.price.floor} {nft.price.currency}
        </Typography>
      </div>
      <IconButton className={clsx(classes.hiddenButton, "bg-secondary")} id="hover-button">
        <ArrowForwardIos />
      </IconButton>
    </Card>
  );
}

export default NFTCard;