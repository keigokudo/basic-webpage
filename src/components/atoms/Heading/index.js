import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Colors } from 'color.js'

const StyledHeading = styled.h1`
  font-size: ${(props) => props.size};
  white-space: pre-wrap;
  color: ${(props) => props.color};
`

const Heading = (props) => {
  const { title, size, level, color } = props
  return (
    <StyledHeading size={size} as={`h${level}`} color={color}>
      {title}
    </StyledHeading>
  )
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  level: PropTypes.string,
}

Heading.defaultProps = {
  size: '5rem',
  level: '1',
  color: Colors.FloralWhite,
}

export default Heading
