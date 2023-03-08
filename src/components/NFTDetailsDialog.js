import { Bookmark, Close, ContentCopy, FavoriteBorder, Launch, Verified, Visibility } from '@mui/icons-material';
import { Button, Chip, Dialog, Grid, Hidden, IconButton, Slide, Tooltip, Typography, } from '@mui/material'
import { makeStyles } from "@mui/styles";
import clsx from 'clsx';
import React from 'react'
import { getChainIcon } from '../utils/icons';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styles = makeStyles((theme) => {
  return ({
    propCard: {
      background: "rgba(128, 86, 220, 0.4 )"
    },
    image:{
    },
    btn: {
      height: "50px",
      borderRadius: "12px",
      fontSize: "14px",
      fontWeight: 600,
    },
    closeBtn:{
      position: "absolute",
      top: "10px",
      right: "10px",
    },
    closeBtn2:{
      position: "absolute",
      top: "10px",
      right: "10px",
      zIndex: theme.zIndex.Modal + 100,
    },
  })
});
const NFTDetailsDialog = (props) => {
  const { onClose, nft } = props;
  const { collection, owner, title, media, tags=[], meta } = nft;
  const classes = styles();
  return (
    <Dialog fullWidth maxWidth="md" TransitionComponent={Transition} open classes={ { paper: "bg-white position-relative rounded-4"} }>
      <Hidden mdDown>
        <IconButton className={classes.closeBtn} onClick={onClose}>
          <Close />
        </IconButton>
      </Hidden>
      <Hidden smUp>
        <IconButton className={classes.closeBtn2} onClick={onClose}>
          <Close />
        </IconButton>
      </Hidden>
      <Grid container className='p-10'>
        <Grid item xs={12} md={4} className={classes.image}>
          <img src={media.image} alt='nft.title' className='w-100 rounded-4' />
        </Grid>
        <Grid item xs={12} md={8} className="p-10 h-100">
          <Typography className='font_16_500'>
            <a href={collection.url} target="_blank" rel='noreferrer' className='hover-underline text-primary'>
              {collection.title} {collection.isVerified && ( <Verified fontSize='12' />)}
            </a> {" "}
          </Typography>
          <div className={clsx('d-flex flex-column flex-md-row w-100 align-items-md-center my-10')}>
            <Typography className='font_25_600 me-20'>
              {title}
            </Typography>
            <Chip variant='outlined' label={<>
              <Typography className='font_15_600'>
                  {nft.chain}
                  {getChainIcon(nft.chain)}
                </Typography>
              </>}
            />
          </div>
          <Typography className='font_13_500'>
            Owned by {" "}
            <span>
              <a className='hover-underline text-primary font_16_500' href={owner[0].url || "#"} target="_blank" rel="noreferrer">
                {owner[0].name || owner[0].address}
              </a>
            </span>
          </Typography>
          <div className='d-flex m-5 my-10'>
            {tags.map(({ _id, title }) => (
              <Chip key={_id} label={title} className="me-10" />
            ))}
          </div>
          <div className='d-flex'>
            <Tooltip title={`Likes: ${meta.likes}`}>
              <Typography className='font_15_600 me-10'>
                <IconButton color='secondary'> <FavoriteBorder /> </IconButton> {meta.likes}
              </Typography>
            </Tooltip>
            <Tooltip title={`Views: ${meta.views}`}>
              <Typography className='font_15_600 me-10'>
                <IconButton color='secondary'> <Visibility /> </IconButton> {meta.views}
              </Typography>
            </Tooltip>
            <Tooltip title={"Copy link"}>
              <IconButton> <ContentCopy /> </IconButton>
            </Tooltip>
          </div>
          <div className='mt-10 p-10 bg-light rounded-4 border-2'>
            <Typography className='mb-10 font_15_600'>
              Floor Price: <span className='text-secondary'>{nft.price.floor} {nft.price.currency}</span>
            </Typography>
            <div className='d-flex flex-column w-100 flex-md-row'>
              <Tooltip title="Visit OpenSea">
                <Button variant='contained' color='secondary' className={clsx(classes.btn, "text-white")} href={nft.url} target="_blank">
                  Buy on OpenSea <Launch className='ms-10' />
                </Button>
              </Tooltip>
              <Tooltip title="Save for later">
                <Button variant='outlined' color='secondary' className={clsx(classes.btn, "ms-md-20 text-white mt-sm-0")}>
                  <Bookmark color='secondary' />
                </Button>
              </Tooltip>
            </div>
          </div>
        </Grid>
      </Grid>
    </Dialog>
  )
};

export default NFTDetailsDialog