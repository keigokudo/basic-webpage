import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHeading = styled.h1`
  font-size: ${(props) => (props.size ? props.size : '5rem')};
  white-space: pre-wrap;
`

const Heading = (props) => {
  const { title, size } = props
  return <StyledHeading size={size}>{title}</StyledHeading>
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default Heading
