import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from 'components/atoms/Link'
import Paragraph from 'components/atoms/Paragraph'

const Container = styled.div`
  display: flex;
  width: 25rem;
  height: 8rem;
  margin: 2rem 3rem;
`

const IconWrapper = styled.div`
  svg {
    font-size: 3rem;
  }
`

const StyledParagraph = styled(Paragraph)`
  margin: 0.5rem 1rem 0.5rem 1rem;
`

const Feature = (props) => {
  const { icon, linkName, linkUrl, description } = props
  return (
    <Container>
      <IconWrapper>{icon && icon}</IconWrapper>
      <div>
        <Link name={linkName} to={linkUrl} fontSize="1.5" />
        <StyledParagraph>{description}</StyledParagraph>
      </div>
    </Container>
  )
}

Feature.propTypes = {}

export default Feature
