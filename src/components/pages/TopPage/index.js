import React, { Fragment } from 'react'

import Header from '../../templates/Header'
import InvertedTriangle from '../../templates/InvertedTriangle'
import Logo from '../../atoms/Logo'
import Link from '../../atoms/Link'

import kvrLogo from '../../assets/image/kvr-demo-logo.png'

const TopPage = () => {
  const logoAltText = 'demo logo for the website'
  const SiteLogo = <Logo url={kvrLogo} altText={logoAltText} width="100" height="100" />
  const NavLink = <Link url="/about" name="about" />

  return (
    <Fragment>
      <Header logo={SiteLogo} navLinks={NavLink} />
      <InvertedTriangle />
    </Fragment>
  )
}

export default TopPage
