import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import HomeTopContent from 'components/molecules/HomeTopContent'
import Feature from 'components/molecules/Feature'

import { SiStyledComponents } from 'react-icons/si'
import { FaBeer } from 'react-icons/fa'
import { GiMolecule } from 'react-icons/gi'

import { Colors } from 'color.js'

const Container = styled.div``

const FeatureList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const HomeContent = () => {
  return (
    <Container>
      <HomeTopContent />
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
