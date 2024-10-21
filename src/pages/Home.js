import React from 'react'
import HeroSection from '../components/HeroSection'
import Service from '../components/Service'
import Trusted from '../components/Trusted'
import FeaturedProduct from '../components/FeaturedProduct'

const data = {
  name: '10X Beauty',
}

const Home = () => {
  return (
    <>
      <HeroSection name={data.name} />
      <FeaturedProduct />
      <Service />
      {/* <Trusted /> */}
    </>
  )
}

export default Home
