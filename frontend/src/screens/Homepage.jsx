import React from 'react'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import FeaturedCategories from '../components/FeaturedCategories.jsx'
import NewArrivals from '../components/NewArrivals.jsx'
import SpecialOffer from '../components/SpecialOffer.jsx'
import Footer from '../components/Footer.jsx'

const Homepage = () => {
  return (
    <div>
      <Header />
        <Hero />
        <FeaturedCategories />
        {/* <NewArrivals /> */}
        <SpecialOffer />
        <Footer />
    </div>
  )
}

export default Homepage
