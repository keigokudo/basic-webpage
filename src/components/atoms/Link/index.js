import React from 'react'
import styled from 'styled-components'
import { Link as RrdLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Colors } from 'color.js'

const StyledRrdLink = styled(RrdLink)`
  text-decoration: none;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem}` : '1rem')};
  margin: 0 1rem;
  color: ${(props) => (props.color ? props.color : Colors.BlackOlive)};

  &:hover {
    opacity: 0.7;
  }
`

const Link = (props) => {
  const { name, to, fontSize, color } = props
  return (
    <StyledRrdLink to={to} fontSize={fontSize} color={color}>
      {name}
    </StyledRrdLink>
  )
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
}

export default Link
