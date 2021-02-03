import React from 'react'
import styled from 'styled-components'

import { HiOutlinePhotograph } from 'react-icons/hi'

import HeaderNavLink from 'components/molecules/HeaderNavLink'
import { Colors } from 'variables.js'

const Container = styled.div`
  display: flex;
  background: ${Colors.BlackOlive};
`

const StyeldSVG = styled(HiOutlinePhotograph)`
  font-size: 3rem;
  color: ${Colors.FloralWhite};
`

const Header = () => {
  return (
    <Container>
      <StyeldSVG />
      <HeaderNavLink />
    </Container>
  )
}

export default Header
