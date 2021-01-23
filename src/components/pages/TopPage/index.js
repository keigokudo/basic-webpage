import React, { Fragment } from 'react'

import Header from '../../templates/Header'
import InvertedTriangle from '../../templates/InvertedTriangle'
import Logo from '../../atoms/Logo'

import kvrLogo from '../../assets/image/kvr-demo-logo.png'

const TopPage = () => {
  const logoAltText = 'demo logo for the website'
  const SiteLogo = <Logo url={kvrLogo} altText={logoAltText} width="100" height="100" />

  return (
    <Fragment>
      <Header logo={SiteLogo} />
      <InvertedTriangle />
      <Logo url={kvrLogo} />
    </Fragment>
  )
}

export default TopPage
