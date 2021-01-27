import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Header = styled.header`
  height: 3rem;
  width: 100%;
  flex: 0 0 auto;
  background: tomato;
`

const Content = styled.section`
  width: 100%;
  flex: 1 0 auto;
  background: skyblue;
`
const Footer = styled.footer`
  height: 8rem;
  width: 100%;
  flex: 0 0 auto;
  background: grey;
`

const PageTemplate = (props) => {
  return (
    <Wrapper>
      <Header>header</Header>
      <Content>content</Content>
      <Footer>footer</Footer>
    </Wrapper>
  )
}

PageTemplate.propType = {}

export default PageTemplate
