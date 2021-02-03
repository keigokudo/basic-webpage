import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Colors } from 'variables.js'

const StyledA = styled.a`
  text-decoration: none;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem}` : '1rem')};
  margin: 0 1rem;
  color: ${(props) => (props.color ? props.color : Colors.BlackOlive)};

  &:hover {
    opacity: 0.7;
  }
`

const ExternalLink = (props) => {
  const { name, to, fontSize, color } = props
  return (
    <StyledA href={to} fontSize={fontSize} color={color} target="_blank">
      {name}
    </StyledA>
  )
}

ExternalLink.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
}

export default ExternalLink
