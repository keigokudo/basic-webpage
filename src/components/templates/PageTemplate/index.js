import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`

const Header = styled.header`
  height: 3rem;
  width: 100%;
  flex: 0 0 auto;
  position: fixed;
  top: 0;
  z-index: 999;
  background: tomato;
`

const Content = styled.section`
  padding-top: 3rem;
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
  const { header, content, footer } = props
  return (
    <Wrapper>
      <Header>{header}</Header>
      <Content>{content}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propType = {
  header: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
}

export default PageTemplate
