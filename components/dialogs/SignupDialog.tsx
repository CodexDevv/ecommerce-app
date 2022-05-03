import { Dialog, Container, AppBar, Toolbar, Typography, Link, Box, Button, TextField, FormLabel } from '@mui/material'
import React, { useState } from 'react'
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import KeyIcon from '@mui/icons-material/Key';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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

const SignupDialog = ({ open, handleClose }: Props) => {

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} PaperProps={{
      style: {
        backgroundColor: '#f1f2f4',
      }
    }}>
      <AppBar position="sticky" elevation={0} sx={{ background: 'transparent', color: 'black', paddingTop: '0.5rem' }}>
        <Toolbar>
          <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }
          } >
            <Link component="button" underline="none" onClick={handleClose} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', color: 'black' }}>
              <KeyboardBackspaceIcon sx={{ marginRight: 1 }} color="primary" />
              <Typography variant="subtitle2" sx={{ display: { xs: 'none', md: 'flex' } }}>Go back</Typography>
            </Link>
          </Container>
        </Toolbar>
      </AppBar >

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginRight: 'auto', marginLeft: 'auto', marginTop: 3, padding: { xs: 3, md: 5 }, maxWidth: '440px' }}>
        <Box>
          <Typography variant="h5" fontWeight={700}>Sign Up</Typography>
          <Box sx={{ display: 'flex', alignItems: 'end', marginBottom: 2 }}>
            <Typography mt={1} variant="subtitle2">Already have an account?</Typography>
            <Link component="button" underline="none" sx={{ paddingLeft: 0.5, marginBottom: { xs: 0.45, md: 0.35 }, fontWeight: 600 }} onClick={handleClose}>Log In</Link>
          </Box>

          <form noValidate autoComplete="off">
            <FormLabel>Email</FormLabel>
            <TextField fullWidth required type="email" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon />
                </InputAdornment>
              ),
            }} sx={{ paddingBottom: 2 }} />
            <FormLabel>Password</FormLabel>
            <TextField fullWidth required type="password" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
            }} sx={{ paddingBottom: 2 }} />
            <FormLabel>Password Confirmation</FormLabel>
            <TextField fullWidth required type="password" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon />
                </InputAdornment>
              ),
            }} sx={{ paddingBottom: 0.5 }} />
          </form>

          <Box sx={{ display: 'flex', flexDirection: 'column' }} >
            <Button variant="contained" sx={{ padding: 2, textTransform: 'none', textAlign: 'left', marginTop: 3 }} >
              <Typography flexGrow={1} textAlign="center">Sign Up</Typography>
              <ArrowRightAltIcon />
            </Button>
          </Box>

        </Box>

      </Box>
    </Dialog >
  )
}

export default SignupDialog;