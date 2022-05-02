import React from 'react'
import { AppBar, Container, Link, Toolbar, Typography, Box } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// TODO: Work on responsiveness, the AppBar is unresponsive.

const Appbar = () => {
  return (
    <AppBar position="sticky" elevation={0} sx={{ background: 'white', color: 'black' }}>
      <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Toolbar sx={{ flexGrow: 1 }}>
          <Link underline="none" color="black" href="/" sx={{ flexGrow: 1 }}>
            <Typography variant={'h5'} component={"div"} sx={{ fontWeight: 600 }}>Ecommerce Store</Typography>
          </Link>
          <Link component="button" underline="none" href="#" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'black' }}>
            <ShoppingCartIcon sx={{ marginRight: 1 }} />
            <Typography variant="h5" component={"div"}>$0.00</Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar >
  )
}

export default Appbar