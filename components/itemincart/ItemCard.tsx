import React from 'react'
import { Box, Fab, Typography, Link, FormLabel, IconButton } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const ItemCard = () => {
  return (
    <Box sx={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', padding: '2rem', height: '13rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <img src="https://via.placeholder.com/120/" />
        <Box sx={{ display: 'flex', width: '100%', marginLeft: 2, justifyContent: 'space-between', alignItems: 'start' }}>
          <Typography fontWeight={700}>Snipcart Logo Sticker</Typography>
          <Link component="button" underline="none">
            <Fab size="small" color="error" aria-label="delete" >
              <DeleteOutlineOutlinedIcon sx={{ color: '#FFB6C1' }} />
            </Fab>
          </Link>
        </Box>
      </Box>

      {/*TODO: need to add the price typography component */}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FormLabel>Quantity</FormLabel>
          <Box sx={{ display: 'flex' }}>
            <Link component="button" underline="none" sx={{ padding: '15px', paddingTop: '5px' }}>+</Link>
            <Typography>1</Typography>
            <Link component="button" underline="none" sx={{ padding: '15px', paddingTop: '5px' }}>-</Link>
          </Box>
        </Box>
      </Box>

    </Box >
  )
}

export default ItemCard