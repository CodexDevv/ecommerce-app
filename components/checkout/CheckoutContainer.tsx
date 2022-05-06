import { Box, Button, Typography, Link } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const CheckoutContainer = () => {
  return (
    <Box>
      <Box>
        <Link component="button" underline="none" sx={{ padding: '1rem', marginBottom: 4, backgroundColor: 'white', width: '100%', outline: '1px solid gray', color: 'black' }}>Promo Code</Link>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="subtitle2">Shipping and taxes will be calculated at checkout.</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
          <Typography>Total</Typography>
          <Typography>$0.00</Typography>
        </Box>
        <Button variant="contained" sx={{ padding: 2, textTransform: 'none', textAlign: 'left', marginBottom: 6 }} >
          <Typography flexGrow={1} textAlign="center">Checkout</Typography>
          <ArrowRightAltIcon />
        </Button>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography sx={{ marginBottom: 1 }}>Secured by Store</Typography>
          <Box sx={{ display: 'flex' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png" style={{ width: 'auto', height: '20px', marginRight: 20 }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" style={{ width: 'auto', height: '20px' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CheckoutContainer