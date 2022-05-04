import { Dialog, Container, AppBar, Toolbar, Typography, Link, Box, Button } from '@mui/material'
import React, { useState } from 'react'
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LoginDialog from './LoginDialog';
import ItemCard from '../itemincart/ItemCard'

type Props = {
  open: boolean,
  handleClose: any,
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const CartDialog = ({ open, handleClose }: Props) => {

  const [itemCount, setItemCount] = useState<number>(1);

  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  }

  const handleLoginClose = () => {
    setLoginOpen(false);
  }

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} PaperProps={{
      style: {
        backgroundColor: '#f1f2f4',
      }
    }}>
      <AppBar position="sticky" elevation={0} sx={{ background: 'transparent', color: 'black', paddingTop: '0.5rem' }}>
        <Toolbar>
          {/* TODO: Might need to reconsider this container as it offsets items */}
          <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }
          } >

            <Link component="button" underline="none" onClick={handleClose} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', color: 'black' }}>
              <KeyboardBackspaceIcon sx={{ marginRight: 1 }} color="primary" />
              <Typography variant="subtitle2" sx={{ display: { xs: 'none', md: 'flex' } }}>Continue Shopping</Typography>
            </Link>

            <Typography fontWeight={600} color={'#2e3338'} sx={{ display: { xs: 'none', md: 'flex' } }}>Cart summary</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end' }}>
              <Link component="button" underline="none" onClick={handleLoginOpen} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', color: 'black' }}>
                <PersonOutlineOutlinedIcon sx={{ marginInline: 1 }} color="primary" />
                <Typography variant="subtitle2">Sign in</Typography>
              </Link>
              <ShoppingBagOutlinedIcon sx={{ marginRight: 1, marginLeft: 2 }} color="primary" />
              <Typography variant="subtitle2">{itemCount}</Typography>
              <LoginDialog open={loginOpen} handleClose={handleLoginClose} />
            </Box>
          </Container>
        </Toolbar>
      </AppBar >
      {(itemCount) ? (
        <Container>
          <h1>Has Items</h1>
          <ItemCard />
        </Container>
      ) : (
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Typography variant="h6" sx={{ fontWeight: '500', marginBottom: 5, color: '#8f99a3' }} >Your cart is empty.</Typography>
          <Button startIcon={<KeyboardBackspaceIcon />} variant="text" sx={{ marginTop: 20 }} onClick={handleClose}>Back to store</Button>
        </Container>
      )}
    </Dialog >
  )
}

export default CartDialog;