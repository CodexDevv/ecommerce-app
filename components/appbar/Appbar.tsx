import React from 'react'
import { AppBar, Container, Link, Stack, Toolbar, Typography, Box } from '@mui/material'

const Appbar = () => {
  return (
    <AppBar position="static" color='transparent' elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ alignItems: 'center' }}>
          <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>LOGO</Typography>
            <Box>
              <Typography>PRICE</Typography>
            </Box>
          </Container>
        </Toolbar>
      </Container>
    </AppBar >
  )
}

export default Appbar