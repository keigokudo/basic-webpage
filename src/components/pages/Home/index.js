import React from 'react'

import PageTemplate from 'components/templates/PageTemplate'
import Header from 'components/organisms/Header'
import Footer from 'components/organisms/Footer'

const Home = () => {
  return <PageTemplate header={<Header />} footer={<Footer />} />
}

export default Home
