import React from 'react'
import { AppBar, Container, Link, Stack, Toolbar, Typography, Box, Card, CardContent, Button, CardActions } from '@mui/material'

const Storecard = () => {
  return (
    <Card variant="outlined" sx={{ maxWidth: "20rem", padding: "1rem" }}>
      <CardContent>
        <Box paddingBottom={2}>
          <img src="https://via.placeholder.com/250" />
        </Box>
        <Typography variant="h4">Title</Typography>
        <Typography variant="h5">Description</Typography>
        <Typography variant="p">PRICE</Typography>
      </CardContent>

      <CardActions sx={{ marginLeft: '0.5rem' }}>
        <Button variant="contained">Add to Cart</Button>
      </CardActions>
    </Card>
  )
}

export default Storecard