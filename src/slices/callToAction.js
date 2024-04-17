import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { PrismicRichText } from "@prismicio/react"
import { CallToActionWrapper, StyledLink } from "./callToAction.styles"

export const CallToAction = props => {
  return (
    <CallToActionWrapper>
      <div>
        <PrismicRichText field={props.slice.primary.title1.richText} />
        <PrismicRichText field={props.slice.primary.description.richText} />
        <StyledLink to={`/${props.slice.primary.destination_page.uid}`}>
          {props.slice.primary.destination_label_text}
        </StyledLink>
      </div>
      <div>
        <GatsbyImage
          image={props.slice.primary.image.gatsbyImageData}
          alt={props.slice.primary.image.alt}
        />
      </div>
    </CallToActionWrapper>
  )
}
