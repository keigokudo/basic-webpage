import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Colors } from 'variables.js'

const StyledHeading = styled.h1`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  margin: 0;
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
  size: '5',
  level: '1',
  color: Colors.FloralWhite,
}

export default Heading
