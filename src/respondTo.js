import { css } from 'styled-components'

export const breakPoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
}

export const respondTo = Object.keys(breakPoints).reduce(
  (accumlator, label) => {
    accumlator[label] = (...args) =>
      css`
        @media (min-width: ${breakPoints[label]}) {
          ${css(...args)}
        }
      `
    return accumlator
  },
  {}
)
