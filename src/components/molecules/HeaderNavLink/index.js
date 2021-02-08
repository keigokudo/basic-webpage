import React from 'react'
import styled from 'styled-components'

import Link from 'components/atoms/Link'

import { Colors } from 'variables.js'

const Container = styled.div`
  margin-left: 3rem;
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: ${Colors.FloralWhite};
  font-size: 1.5rem;
`

const HeaderNavLink = () => {
  return (
    <Container>
      <StyledLink href="/">HOME</StyledLink>
      <StyledLink href="/about">ABOUT</StyledLink>
      <StyledLink href="/sample">SAMPLE</StyledLink>
    </Container>
  )
}

export default HeaderNavLink
