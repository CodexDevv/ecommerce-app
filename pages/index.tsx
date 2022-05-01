import { Container, Grid } from '@mui/material'
import type { NextPage } from 'next'
import Appbar from '../components/appbar/Appbar'
import Storecard from '../components/storecard/Storecard'

const Home: NextPage = () => {
  return (
    <Container maxWidth="md">
      <Appbar />
      <br />
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <Storecard />
        </Grid>
        <Grid item>
          <Storecard />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
