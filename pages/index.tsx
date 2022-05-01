import { Container } from '@mui/material'
import type { NextPage } from 'next'
import Appbar from '../components/appbar/Appbar'

const Home: NextPage = () => {
  return (
    <Container>
      <Appbar />
    </Container>
  )
}

export default Home
