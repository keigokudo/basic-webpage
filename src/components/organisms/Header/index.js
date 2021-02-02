import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { HiOutlinePhotograph } from 'react-icons/hi'

import HeaderNavLink from 'components/molecules/HeaderNavLink'
import { Colors } from 'color.js'

const Container = styled.div`
  display: flex;
  background: ${Colors.BlackOlive};
`

const StyeldSVG = styled(HiOutlinePhotograph)`
  font-size: 3rem;
  color: ${Colors.FloralWhite};
`

const NavLinkSection = styled.section``

const Header = (props) => {
  return (
    <Container>
      <StyeldSVG />
      <HeaderNavLink />
    </Container>
  )
}

Header.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.element),
}

export default Header
