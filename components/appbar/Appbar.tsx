import React, { useState } from 'react'
import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartDialog from '../dialogs/CartDialog';

const Appbar = () => {

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <AppBar position="static" elevation={0} sx={{ background: 'white', color: 'black' }}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Link underline="none" color="black" href="/">
          <Typography variant={'h5'} component={"div"} sx={{ fontWeight: 600 }}>Ecommerce Store</Typography>
        </Link>
        <Link component="button" underline="none" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'black' }} onClick={handleOpen}>
          <ShoppingCartIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5" component={"div"}>$0.00</Typography>
        </Link>
        <CartDialog open={open} handleClose={handleClose} />
      </Toolbar>
    </AppBar >
  )
}

export default Appbar