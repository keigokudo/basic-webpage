import React from 'react'

import PageTemplate from 'components/templates/PageTemplate'
import Header from 'components/organisms/Header'
import HomeContent from 'components/organisms/HomeContent'
import Footer from 'components/organisms/Footer'

const Home = () => {
  return (
    <PageTemplate
      content={<HomeContent />}
      header={<Header />}
      footer={<Footer />}
    />
  )
}

export default Home
