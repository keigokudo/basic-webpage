import React from 'react'
import styled from 'styled-components'

import HomeTopContent from 'components/molecules/HomeTopContent'
import Feature from 'components/molecules/Feature'
import Heading from 'components/atoms/Heading'

import { SiStyledComponents } from 'react-icons/si'
import { FaBeer } from 'react-icons/fa'
import { GiMolecule } from 'react-icons/gi'

import { Colors, breakPoints } from 'variables.js'

const Container = styled.div``

const HeadingContainer = styled.div`
  background: ${Colors.FloralWhite};
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

const StyledHeading = styled(Heading)`
  font-size: 2rem;
`

const FeatureList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: ${Colors.FloralWhite};

  @media (max-width: ${breakPoints.sm}) {
    flex-direction: column;
  }
`

const HomeContent = () => {
  return (
    <Container>
      <HomeTopContent />
      <HeadingContainer>
        <Heading level="2">Features</Heading>
      </HeadingContainer>
      <FeatureList>
        <Feature
          icon={<SiStyledComponents />}
          linkName="Styled-component"
          linkUrl="https://styled-components.com/"
          description="styled-components is the result of wondering how we could enhance CSS for styling React component systems."
        />
        <Feature
          icon={<FaBeer />}
          linkName="React-icon"
          linkUrl="https://react-icons.github.io/react-icons"
          description="Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using."
        />
      </FeatureList>
      <FeatureList>
        <Feature
          icon={<GiMolecule />}
          linkName="Atomic design"
          linkUrl="https://bradfrost.com/blog/post/atomic-web-design/"
          description="Atomic design is methodology for creating design systems. There are five distinct levels in atomic design: Atoms, Molecules, Oraganisms, Templates"
        />
      </FeatureList>
    </Container>
  )
}

export default HomeContent
