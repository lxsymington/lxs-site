import React from "react"
import { PageProps, graphql } from "gatsby"
import { Layout } from "../components/layout"

type BlogPostProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
      }
      html: string
    }
  }
}

export default function BlogPost({
  data,
}: BlogPostProps): React.FC<PageProps<BlogPostProps>> {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
