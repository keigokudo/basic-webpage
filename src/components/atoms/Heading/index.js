import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Colors } from 'color.js'

const StyledHeading = styled.h1`
  font-size: ${(props) => (props.size ? props.size : '5rem')};
  white-space: pre-wrap;
  color: ${Colors.BlackOlive};
`

const Heading = (props) => {
  const { title, size, level } = props
  return (
    <StyledHeading size={size} as={`h${level}`}>
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
  level: 1,
}

export default Heading
