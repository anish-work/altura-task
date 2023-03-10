import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const FullScreenLoader = () => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#2C1E4A' }} open color='secondary'>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default FullScreenLoader;