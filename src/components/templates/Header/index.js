import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledDiv = styled.div`
  height: 8rem;
  width: 100%;
`

const Container = styled.div`
  display: flex;
`

const LogoSection = styled.section`
  height: 6rem;
  width: 6rem;
  margin: 1rem 5rem 1rem 1rem;
`

const NavLinkSection = styled.section`
  padding-top: 2.5rem;
`

const Header = (props) => {
  const { logo, navLinks } = props

  return (
    <StyledDiv>
      <Container>
        <LogoSection>{logo}</LogoSection>
        <NavLinkSection>{navLinks}</NavLinkSection>
      </Container>
    </StyledDiv>
  )
}

Header.propTypes = {
  logo: PropTypes.element,
  navLinks: PropTypes.arrayOf(PropTypes.element),
}

export default Header
