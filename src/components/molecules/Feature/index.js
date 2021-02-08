import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ExternalLink from 'components/atoms/ExternalLink'
import Paragraph from 'components/atoms/Paragraph'

import { Colors, breakPoints } from 'variables.js'

const Container = styled.div`
  display: flex;
  width: 25rem;
  height: 8rem;
  margin: 2rem 3rem;

  @media (max-width: ${breakPoints.sm}) {
    width: auto;
    height: auto;
  }
`

const IconWrapper = styled.div`
  svg {
    font-size: 3rem;
    color: ${Colors.BlackOlive};
  }
`

const StyledExternalLink = styled(ExternalLink)`
  font-size: 1.5rem;
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
        <StyledExternalLink href={linkUrl}>{linkName}</StyledExternalLink>
        <StyledParagraph>{description}</StyledParagraph>
      </div>
    </Container>
  )
}

Feature.propTypes = {
  icon: PropTypes.node,
  linkName: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Feature
