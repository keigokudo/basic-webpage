import React from 'react'
import styled from 'styled-components'

import Link from 'components/atoms/Link'

import { Colors } from 'color.js'

const Container = styled.div`
  margin-left: 3rem;
  display: flex;
  align-items: center;
`

const HeaderNavLink = () => {
  const Home = (
    <Link name="HOME" to="./" fontSize="1.5" color={Colors.FloralWhite} />
  )
  const About = (
    <Link name="ABOUT" to="./about" fontSize="1.5" color={Colors.FloralWhite} />
  )
  const Gallery = (
    <Link
      name="GALLERY"
      to="./gallery"
      fontSize="1.5"
      color={Colors.FloralWhite}
    />
  )
  return (
    <Container>
      {Home}
      {About}
      {Gallery}
    </Container>
  )
}

export default HeaderNavLink
