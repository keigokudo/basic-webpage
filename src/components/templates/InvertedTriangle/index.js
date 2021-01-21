import React, { Fragment } from 'react'
import styled from 'styled-components'

const TopSection = styled.section`
  height: 25rem;
  width: 100%;
  background: tomato;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const FirstSection = styled.section`
  height: 20rem;
  width: 25rem;
  background: pink;
`

const SecondSection = styled.section`
  height: 20rem;
  width: 25rem;
  background: orange;
`

const InvertedTriangle = () => {
  return (
    <Fragment>
      <TopSection />
      <Container>
        <FirstSection />
        <SecondSection />
      </Container>
    </Fragment>
  )
}

export default InvertedTriangle
