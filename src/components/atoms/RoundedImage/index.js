import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

const RoundedImage = (props) => {
  const { className, src, alt, ...rest } = props
  return <StyledImage className={className} src={src} alt={alt} {...rest} />
}

export default RoundedImage
