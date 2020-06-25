import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

type BlogPostProps = {
  data: {
    mdx: {
      frontmatter: {
        title: string
      }
      body: string
    }
  }
}

export default function BlogPost({ data }: BlogPostProps): ReactElement {
  const post = data.mdx
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query MDXQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`
