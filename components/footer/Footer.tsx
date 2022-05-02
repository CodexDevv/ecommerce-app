import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <footer>
      <Box display="flex" justifyContent="center" alignItems="flex-end" flexGrow={1} height={100} paddingBottom={{ xs: 5, md: 0 }}>
        <Typography variant="subtitle2">
          &copy; Ecommerce Store
        </Typography>
      </Box>
    </footer>
  )
}

export default Footer