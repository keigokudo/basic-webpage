import React, { Fragment } from 'react'

import PageTemplate from '../../templates/PageTemplate'
import Logo from '../../atoms/Logo'
import Link from '../../atoms/Link'

import kvrLogo from '../../assets/image/kvr-demo-logo.png'

const Home = () => {
  const logoAltText = 'demo logo for the website'
  const SiteLogo = <Logo url={kvrLogo} altText={logoAltText} width="100" height="100" />
  const NavLink = <Link url="/about" name="about" />

  return <PageTemplate></PageTemplate>
}

export default TopPage
