import React from 'react'

import PageTemplate from 'components/templates/PageTemplate'
import Header from 'components/organisms/Header'
import HomeTopContent from 'components/organisms/HomeTopContent'
import Footer from 'components/organisms/Footer'

const Home = () => {
  return (
    <PageTemplate
      content={<HomeTopContent />}
      header={<Header />}
      footer={<Footer />}
    />
  )
}

export default Home
