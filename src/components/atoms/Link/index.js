import React from 'react'
import styled from 'styled-components'
import { Link as RrdLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const StyledRrdLink = styled(RrdLink)`
  text-decoration: none;
  font-size: 2rem;
  padding: 1rem;

  &:hover {
    opacity: 0.5;
  }
`

const Link = (props) => {
  const { name, url } = props
  return <StyledRrdLink to={url}>{name}</StyledRrdLink>
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Link
