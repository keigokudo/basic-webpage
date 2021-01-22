import React, { Fragment } from 'react'

import Header from '../../templates/Header'
import InvertedTriangle from '../../templates/InvertedTriangle'

import Link from '../../atoms/Link'

const TopPage = () => {
  return (
    <Fragment>
      <Header />
      <Link url="https://www.w3schools.com/tags/tag_a.asp" name="Link" />
      <InvertedTriangle />
    </Fragment>
  )
}

export default TopPage
