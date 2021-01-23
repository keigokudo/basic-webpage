import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLogo = styled.img``

const Logo = (props) => {
  const { url, altText, width, height } = props

  return <StyledLogo src={url} alt={altText} width={width} height={height} />
}

Logo.propType = {
  url: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
}

export default Logo
