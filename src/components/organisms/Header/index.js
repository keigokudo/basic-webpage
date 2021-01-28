import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
`

const LogoSection = styled.section``

const NavLinkSection = styled.section``

const Header = (props) => {
  const { logo, navLinks } = props

  return (
    <Container>
      <LogoSection>{logo}</LogoSection>
      <NavLinkSection>{navLinks}</NavLinkSection>
    </Container>
  )
}

Header.propTypes = {
  logo: PropTypes.element,
  navLinks: PropTypes.arrayOf(PropTypes.element),
}

export default Header
