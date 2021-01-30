import React from 'react'
import styled from 'styled-components'

import FooterLink from 'components/molecules/FooterLink'
import { Colors } from 'color.js'

const Container = styled.div`
  background: ${Colors.PaleSilver};
  height: 100vh;
  display: flex;
  justify-content: space-between;
  &:first-child {
    padding-left: 2rem;
  }
  &:last-child {
    padding-right: 2rem;
  }
`

const StyledSection = styled.div``

const Footer = (props) => {
  const leftLinks = [
    { name: 'left link1', to: './' },
    { name: 'left link2', to: './' },
    { name: 'left link3', to: './' },
  ]

  const centerLinks = [
    { name: 'center link1', to: './' },
    { name: 'center link2', to: './' },
    { name: 'center link3', to: './' },
  ]

  const rightLinks = [
    { name: 'right link1', to: './' },
    { name: 'right link2', to: './' },
    { name: 'right link3', to: './' },
  ]

  return (
    <Container>
      <StyledSection>
        <FooterLink links={leftLinks} />
      </StyledSection>
      <StyledSection>
        <FooterLink links={centerLinks} />
      </StyledSection>
      <StyledSection>
        <FooterLink links={rightLinks} />
      </StyledSection>
    </Container>
  )
}

Footer.propTypes = {}

export default Footer
