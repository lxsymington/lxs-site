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

export default function Short({ data }: QueryProps): ReactElement {
  console.log(data)
  return (
    <Layout>
      <SEO title="Short Reads" />
      <h1>
        <strong>Short Reads</strong>
      </h1>
      <Gallery exhibits={data.allMdx.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { timeToRead: { lt: 5 } }
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
