import React, { ReactElement } from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Layout, SEO } from "../components"

const components = { Link }

type PostProps = {
  data: {
    mdx: {
      frontmatter: {
        title: string
      }
      body: string
    }
  }
}

export default function BlogPost({ data }: PostProps): ReactElement {
  const post = data.mdx
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <MDXProvider components={components}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const query = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`
