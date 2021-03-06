import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from 'components/atoms/Link'

import { breakPoints } from 'variables.js'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 1rem;
  padding-bottom: 0.5rem;

  & > a {
    margin-bottom: 0.5rem;
  }

  @media (max-width: ${breakPoints.sm}) {
    align-items: center;
  }
`
const FooterLink = (props) => {
  const { links } = props
  const footerLink = links.map((i, index) => (
    <Link href={i.href} key={i.name + index}>
      {i.name}
    </Link>
  ))
  return <Container>{footerLink}</Container>
}

FooterLink.propType = {
  links: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, href: PropTypes.string })
  ),
}

export default FooterLink
