import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { FaReact } from 'react-icons/fa'

import Heading from 'components/atoms/Heading'
import { Colors } from 'color.js'

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${Colors.FloralWhite};
`

const StyeldSVG = styled(FaReact)`
  font-size: 15rem;
  margin: 3rem;
  color: ${Colors.BlackOlive};
`

const HomeTopContent = (props) => {
  return (
    <Container>
      <StyeldSVG />
      <Heading title={'React \r\nAtomic design'} />
    </Container>
  )
}

export default HomeTopContent
