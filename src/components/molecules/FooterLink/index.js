import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Link from 'components/atoms/Link'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 1rem;

  & > a {
    margin-bottom: 0.5rem;
  }
`
const FooterLink = (props) => {
  const { links } = props
  const footerLink = links.map((i) => <Link name={i.name} to={i.to} />)
  return <Container>{footerLink}</Container>
}

FooterLink.propType = {
  links: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, to: PropTypes.string })),
}

export default FooterLink
