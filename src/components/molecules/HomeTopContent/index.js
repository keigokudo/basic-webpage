import React from 'react'
import styled from 'styled-components'

import { FaReact } from 'react-icons/fa'

import Heading from 'components/atoms/Heading'
import { Colors, breakPoints } from 'variables.js'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.BlackOlive};

  @media (max-width: ${breakPoints.sm}) {
    flex-direction: column;
  }
`

const SVGWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  margin: 3rem;

  @media (max-width: ${breakPoints.sm}) {
    text-align: center;
    height: auto;
    margin: 2rem 2rem 1rem 2rem;
  }
`

const StyeldSVG = styled(FaReact)`
  font-size: 15rem;
  margin: 0;
  color: ${Colors.FloralWhite};

  @media (max-width: ${breakPoints.sm}) {
    width: 10rem;
    height: 10rem;
  }
`

const HeadingWrapper = styled.div`
  text-align: center;

  @media (max-width: ${breakPoints.sm}) {
    margin: 0 0 1.5rem 0;
  }
`

const StyledHeading = styled(Heading)``

const HomeTopContent = () => {
  return (
    <Container>
      <SVGWrapper>
        <StyeldSVG />
      </SVGWrapper>
      <HeadingWrapper>
        <StyledHeading title={'React \r\nAtomic design'} />
      </HeadingWrapper>
    </Container>
  )
}

export default HomeTopContent
