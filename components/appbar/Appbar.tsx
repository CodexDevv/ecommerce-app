import React from 'react'
import { AppBar, Container, Link, Stack, Toolbar, Typography, Box, Button } from '@mui/material'

// TODO: Work on responsiveness, the AppBar is unresponsive.

const Appbar = () => {
  return (
    <AppBar position="static" color='transparent' elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ alignItems: 'center' }}>
          <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href="/" underline="none" sx={{ color: 'black' }}>
              <Typography variant="h4" fontWeight={600}>Ecommerce Store</Typography>
            </Link>
            <Link href="#" underline="none" sx={{ color: 'black' }}>
              <Typography variant="h4">PRICE</Typography>
            </Link>
          </Container>
        </Toolbar>
      </Container>
    </AppBar >
  )
}

export default Appbar