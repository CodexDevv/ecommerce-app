import { Container, Grid } from '@mui/material'
import type { NextPage } from 'next'
import Appbar from '../components/appbar/Appbar'
import Storecard from '../components/storecard/Storecard'
import Footer from '../components/footer/Footer'

const Home: NextPage = () => {
  return (
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column' }}>
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

      <Footer />
    </Container >
  )
}

export default Home
