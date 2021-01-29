import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { HiOutlinePhotograph } from 'react-icons/hi'

import HeaderNavLink from 'components/molecules/HeaderNavLink'

const Container = styled.div`
  display: flex;
`

const StyeldSVG = styled(HiOutlinePhotograph)`
  font-size: 3rem;
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
