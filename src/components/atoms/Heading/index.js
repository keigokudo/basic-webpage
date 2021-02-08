import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Colors } from 'variables.js'

const StyledHeading = styled.h1`
  color: ${Colors.BlackOlive};
  margin: 0;
`

const Heading = (props) => {
  const { className, children, level } = props
  return (
    <StyledHeading className={className} as={`h${level}`}>
      {children}
    </StyledHeading>
  )
}

Heading.propTypes = {
  level: PropTypes.string,
}

Heading.defaultProps = {
  level: '1',
}

export default Heading
