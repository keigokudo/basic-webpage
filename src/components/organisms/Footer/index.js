import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledFooter = styled.footer`
  height: 10rem;
  width: 100%;
  background: grey;
  flex: 0 0 auto;
`

const Container = styled.div`
  display: flex;
`

const Footer = (props) => {
  return (
    <StyledFooter>
      <Container></Container>
    </StyledFooter>
  )
}

Footer.propTypes = {}

export default Footer
