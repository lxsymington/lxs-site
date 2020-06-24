import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { Gallery, Layout, MarkdownNode } from "../components"

type QueryProps = {
  data: {
    allMarkdownRemark: {
      nodes: MarkdownNode[]
    }
  }
}

export default function Short({ data }: QueryProps): ReactElement {
  console.log(data)
  return (
    <Layout>
      <h1>
        <strong>Short Reads</strong>
      </h1>
      <Gallery exhibits={data.allMarkdownRemark.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
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
