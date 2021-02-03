import React from 'react'
import styled from 'styled-components'

import { FaReact } from 'react-icons/fa'

import Heading from 'components/atoms/Heading'
import { Colors } from 'color.js'

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${Colors.BlackOlive};
`

const StyeldSVG = styled(FaReact)`
  font-size: 15rem;
  margin: 3rem;
  color: ${Colors.FloralWhite};
`

const HomeTopContent = () => {
  return (
    <Container>
      <StyeldSVG />
      <Heading title={'React \r\nAtomic design'} />
    </Container>
  )
}

export default HomeTopContent
