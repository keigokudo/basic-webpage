import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledA = styled.a`
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`

const Link = (props) => {
  const { name, url } = props
  return <StyledA href={url}>{name}</StyledA>
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Link
