import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Colors } from 'variables.js'

const StyledA = styled.a`
  text-decoration: none;
  font-size: 1rem;
  margin: 0 1rem;
  color: ${Colors.BlackOlive};

  &:hover {
    opacity: 0.7;
  }
`

const ExternalLink = (props) => {
  const { className, children, href, ...rest } = props
  return (
    <StyledA className={className} href={href} target="_blank" {...rest}>
      {children}
    </StyledA>
  )
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
}

export default ExternalLink
