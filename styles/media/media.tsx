//media.js
import { css } from "styled-components"

const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 320 // default
}

const mobile = (args: TemplateStringsArray) => css`
    @media (min-width: ${sizes.mobile}px) {
      ${css(args)};
    }
  `
const tablet = (args: TemplateStringsArray) => css`
@media (min-width: ${sizes.tablet}px) {
  ${css(args)};
}
`
const desktop = (args: TemplateStringsArray) => css`
@media (min-width: ${sizes.desktop}px) {
  ${css(args)};
}
`
export default {desktop, tablet, mobile};