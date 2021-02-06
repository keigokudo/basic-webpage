import React from 'react'

import PageTemplate from 'components/templates/PageTemplate'
import Header from 'components/organisms/Header'
import AboutContent from 'components/organisms/AboutContent'
import Footer from 'components/organisms/Footer'

const About = () => {
  return (
    <PageTemplate
      content={<AboutContent />}
      header={<Header />}
      footer={<Footer />}
    />
  )
}

export default About
