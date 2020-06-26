import React from "react"
import { Link, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Layout, SEO } from "../components"

const components = { Link }

type PostProps = {
  data: {
    mdx: {
      id: string
      body: string
    }
  }
}

export default class PostLayout {
  private props: PostProps

  constructor(props: PostProps) {
    this.props = props
  }

  render() {
    return (
      <Layout>
        <SEO title="test" />
        <h1>test</h1>
        <MDXProvider components={components}>
          <MDXRenderer>{this.props.data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
    }
  }
`
