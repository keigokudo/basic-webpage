import React from 'react'
import styled from 'styled-components'

import FooterLink from 'components/molecules/FooterLink'
import { Colors, breakPoints } from 'variables.js'

const Container = styled.div`
  background: ${Colors.PaleSilver};
  height: 100%;
  display: flex;
  justify-content: space-between;
  &:first-child {
    padding-left: 2rem;
  }
  &:last-child {
    padding-right: 2rem;
  }

  @media (max-width: ${breakPoints.sm}) {
    flex-direction: column;
  }
`

const StyledSection = styled.div``

const Footer = (props) => {
  const leftLinks = [
    { name: 'left link1', href: './' },
    { name: 'left link2', href: './' },
    { name: 'left link3', href: './' },
  ]

  const centerLinks = [
    { name: 'center link1', href: './' },
    { name: 'center link2', href: './' },
    { name: 'center link3', href: './' },
  ]

  const rightLinks = [
    { name: 'right link1', href: './' },
    { name: 'right link2', href: './' },
    { name: 'right link3', href: './' },
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
