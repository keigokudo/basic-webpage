import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Colors } from 'color.js'

const Paragraph = styled.p`
  font-size: 1rem;
  color: ${Colors.BlackOlive};
  white-space: pre-wrap;
  margin: 0; // reset user agent style
`

export default Paragraph
