import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Heading from 'components/atoms/Heading'

import { FaReact } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const StyeldSVG = styled(FaReact)`
  font-size: 15rem;
  margin: 3rem;
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
