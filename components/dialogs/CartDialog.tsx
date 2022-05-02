import { Dialog, Container, AppBar, Box, Toolbar, Typography, Stack, Link } from '@mui/material'
import React from 'react'
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

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

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar position="sticky" elevation={0} sx={{ background: 'transparent', color: 'black' }}>
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack direction={"row"} justifyContent="space-between" alignItems="center" spacing={2}>
              <Link component="button" underline="none" onClick={handleClose}>
                <Typography>Continue Shopping</Typography>
              </Link>

              <Typography>Cart summary</Typography>

              <Typography>Item Count: 0</Typography>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar >
      <Container>
        <h1>Testing</h1>
      </Container>
    </Dialog >
  )
}

export default CartDialog