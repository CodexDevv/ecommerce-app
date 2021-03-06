import React from 'react'
import { Box, Fab, Typography, Link, FormLabel, IconButton } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const ItemCard = () => {
  return (
    <Box sx={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', padding: '2rem', height: '13rem', marginBottom: '4rem' }}>
      <Box sx={{ display: 'flex', aspectRatio: '1 / 1' }}>
        <img src="https://via.placeholder.com/120/" />
      </Box>
      <Box flexGrow={1}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ display: 'flex', width: '100%', height: 'max-content', marginLeft: 2, justifyContent: 'space-between', alignItems: 'start' }}>
            <Typography fontWeight={700}>Snipcart Logo Sticker</Typography>
            <Link component="button" underline="none">
              <Fab size="small" color="error" aria-label="delete" >
                <DeleteOutlineOutlinedIcon sx={{ color: '#FFB6C1' }} />
              </Fab>
            </Link>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: 6 }}>
            <FormLabel sx={{ fontSize: '0.8rem', paddingBottom: '0.2rem' }}>Quantity</FormLabel>
            <Box sx={{ display: 'flex', outline: '2px solid lightblue', paddingTop: '10px' }}>
              <Link component="button" underline="none" sx={{ padding: '15px', paddingTop: '5px' }}>-</Link>
              <Typography>1</Typography>
              <Link component="button" underline="none" sx={{ padding: '15px', paddingTop: '5px' }}>+</Link>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1.5 }}>
            <Typography>$0.00</Typography>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default ItemCard