import { ArrowForwardIos } from '@mui/icons-material';
import { Avatar, Button, Card, CardMedia, Divider, IconButton, Tooltip } from '@mui/material';
import  { makeStyles } from "@mui/styles";
import clsx from 'clsx';

import React from 'react';

const styles = makeStyles((theme) => ({
  nftCardRoot:{
    position: "relative",
    maxWidth: 345, borderRadius: "12px", cursor: "pointer",
    transition: "all ease-in 0.3s",
    "&:hover":{
      translate: "0 -2%",
      backgroundColor: "f5f5f5",
      "& #card-media" : {
        transition: "background-size ease-in 10s",
        backgroundSize: "130%",
      },
      "& #hover-button" :{
        transition: "all ease-in 0.3s",
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
  const classes = styles();
  return (
    <Card classes={{root: classes.nftCardRoot}} onClick={(e) => onClick(nft)}>
      <div className='h-100 p-10 m-0 d-flex justify-content-between'>
        <Tooltip title={`Collection: ${nft.collection.title}`}>
          <div className='d-flex'>
            <Avatar src={nft.collection.imageUrl} sx={{ width:"18px", height: "18px" }}/>
            <p className='text-grey font_13_500 mx-10'>{nft.collection.title}</p>
          </div>
        </Tooltip>
      </div>
      <CardMedia
        sx={{ height: 240, borderRadius: "12px 12px 0px 0px" }}
        id="card-media"
        image={nft.media.image}
        title={nft.title}
      />
      <div className='p-10'>
        <p className='font_20_600 mt-10'>
          {nft.title}
        </p>
        <Divider className='border-dark w-50 mt-5' />
        <p className='font_13_700 mt-8 text-grey'>
          Floor Price: <span className='text-warning'>{nft.price.floor} {nft.price.currency}</span>
        </p>
      </div>
      <IconButton className={clsx(classes.hiddenButton, "bg-secondary")} id="hover-button">
        <ArrowForwardIos />
      </IconButton>
    </Card>
  );
}

export default NFTCard;