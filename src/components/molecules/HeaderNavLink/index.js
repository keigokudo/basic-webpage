import React from 'react'
import styled from 'styled-components'

import Link from 'components/atoms/Link'

const Container = styled.div`
  margin-left: 3rem;
  display: flex;
  align-items: center;
`

const HeaderNavLink = () => {
  const Home = <Link name="HOME" to="./" />
  const About = <Link name="ABOUT" to="./about" />
  const Gallery = <Link name="GALLERY" to="./gallery" />
  return (
    <Container>
      {Home}
      {About}
      {Gallery}
    </Container>
  )
}

export default HeaderNavLink
