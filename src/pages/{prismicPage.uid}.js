import * as React from "react"
import { graphql, Link } from "gatsby"
import { SliceZone } from "@prismicio/react"
import { components } from "../slices"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Page = props => {
  console.log(props)
  return (
    <Layout>
      <SliceZone
        components={components}
        slices={props.data.prismicPage.data.body}
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Page two" />

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      data {
        body {
          ... on PrismicPageDataBodyForm {
            id
            slice_type
            primary {
              form_endpoint
            }
            items {
              input_type
              is_required
              placeholder
            }
          }
        }
        page_title {
          text
          richText
        }
      }
    }
  }
`

export default Page
