import React from 'react'

import PageTemplate from 'components/templates/PageTemplate'
import Logo from 'components/atoms/Logo'
import Link from 'components/atoms/Link'

import kvrLogo from 'components/assets/image/kvr-demo-logo.png'

const Home = () => {
  const logoAltText = 'demo logo for the website'
  const SiteLogo = <Logo url={kvrLogo} altText={logoAltText} width="100" height="100" />
  const NavLink = <Link url="/about" name="about" />

  return <PageTemplate></PageTemplate>
}

export default Home
