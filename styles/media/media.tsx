//media.js
import { css } from "styled-components"

const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 300 // default
}

export const device = {
  desktop: `@media only screen and (min-width: ${sizes.desktop}px)`,
  tablet: `@media only screen and (min-width: ${sizes.tablet}px) and (max-width: ${sizes.desktop -1 }px)`,
  mobile: `@media only screen and (min-width: ${sizes.mobile}px) and (max-width: ${sizes.tablet -1 }px)`,

}