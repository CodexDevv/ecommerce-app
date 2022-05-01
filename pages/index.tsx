import { Container } from '@mui/material'
import type { NextPage } from 'next'
import Appbar from '../components/appbar/Appbar'
import Storecard from '../components/storecard/Storecard'

const Home: NextPage = () => {
  return (
    <Container>
      <Appbar />
      <Storecard />
    </Container>
  )
}

export default Home
