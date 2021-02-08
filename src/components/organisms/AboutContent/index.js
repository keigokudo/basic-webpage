import React from 'react'
import styled from 'styled-components'

import Paragraph from 'components/atoms/Paragraph'
import Heading from 'components/atoms/Heading'
import RoundedImage from 'components/atoms/RoundedImage'

import { Colors, breakPoints } from 'variables.js'
import image from 'components/assets/image/github-profile.jpeg'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.FloralWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledHeading = styled(Heading)`
  margin: 1rem;
  font-size: 3rem;
`

const ParagraphWrapper = styled.div`
  width: 35rem;
  margin: 2rem auto;
  text-align: left;

  @media (max-width: ${breakPoints.sm}) {
    width: 70%;
  }
`

const StyledParagraph = styled(Paragraph)`
  font-size: 1.3rem;
`

const AboutContent = () => {
  return (
    <Container>
      <StyledHeading>About</StyledHeading>
      <RoundedImage src={image} alt="profile picture" />
      <ParagraphWrapper>
        <StyledParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          efficitur sem pretium nisl vulputate, et accumsan tellus consectetur.
          Nullam tortor massa, egestas et scelerisque non, tincidunt quis nulla.
          Vestibulum magna mauris, convallis nec urna ac, lacinia facilisis
          nisl. Fusce eros ipsum, mattis a tempor ut, congue id metus. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Fusce congue et
          sem sed sollicitudin. ipsum.
        </StyledParagraph>
      </ParagraphWrapper>
    </Container>
  )
}

export default AboutContent
