import { Dialog, Container, AppBar, Toolbar, Typography, Link } from '@mui/material'
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
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} PaperProps={{
      style: {
        backgroundColor: '#f1f2f4',
      }
    }}>
      <AppBar position="sticky" elevation={0} sx={{ background: 'transparent', color: 'black' }}>
        <Container>
          <Toolbar>
            <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

              <Link component="button" underline="none" onClick={handleClose}>
                <Typography>Continue Shopping</Typography>
              </Link>

              <Typography fontWeight={600} lineHeight={1} color={'#2e3338'}>Cart summary</Typography>

              <Typography>Item Count: 0</Typography>
            </Container>
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