import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ExternalLink from 'components/atoms/ExternalLink'
import Paragraph from 'components/atoms/Paragraph'

import { Colors } from 'variables.js'

const Container = styled.div`
  display: flex;
  width: 25rem;
  height: 8rem;
  margin: 2rem 3rem;
`

const IconWrapper = styled.div`
  svg {
    font-size: 3rem;
    color: ${Colors.BlackOlive};
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
        <ExternalLink name={linkName} to={linkUrl} fontSize="1.5" />
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
