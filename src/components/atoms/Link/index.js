import React from 'react'
import styled from 'styled-components'
import { Link as RrdLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Colors } from 'variables.js'

const StyledRrdLink = styled(RrdLink)`
  text-decoration: none;
  font-size: 1rem;
  margin: 0 1rem;
  color: ${Colors.BlackOlive};

  &:hover {
    opacity: 0.7;
  }
`

const Link = (props) => {
  const { className, children, href, ...rest } = props
  return (
    <StyledRrdLink className={className} to={href} {...rest}>
      {children}
    </StyledRrdLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
}

export default Link
