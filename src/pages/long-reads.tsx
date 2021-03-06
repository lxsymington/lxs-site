import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { Gallery, Layout, SEO, MdxNode } from "../components"

type QueryProps = {
  data: {
    allMdx: {
      nodes: MdxNode[]
    }
  }
}

export default function Long({ data }: QueryProps): ReactElement {
  return (
    <Layout>
      <SEO title="Long Reads" />
      <h1>
        <strong>Long Reads</strong>
      </h1>
      <Gallery exhibits={data.allMdx.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { timeToRead: { gte: 5 } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true)
          title
          description
          tags
        }
        timeToRead
      }
    }
  }
`
