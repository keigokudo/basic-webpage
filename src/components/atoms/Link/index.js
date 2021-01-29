import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Link as RrdLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Colors } from 'color.js'

const StyledRrdLink = styled(RrdLink)`
  text-decoration: none;
  font-size: 2rem;
  margin: 0 1rem;
  color: ${Colors.BlackOlive};

  &:hover {
    opacity: 0.7;
  }
`

const Link = (props) => {
  const { name, to } = props
  return <StyledRrdLink to={to}>{name}</StyledRrdLink>
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Link
