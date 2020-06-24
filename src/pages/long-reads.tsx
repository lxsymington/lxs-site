import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"

export default function Short({ data }): ReactElement {
  return (
    <Layout>
      <div>
        <h1>Long Reads</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Description</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {data.allMarkdownRemark.nodes.map(({ frontmatter }, index) => (
              <tr key={index}>
                <td>{frontmatter.title}</td>
                <td>{frontmatter.description}</td>
                <td>
                  <ul>
                    {frontmatter.tags.map(tag => (
                      <li>{tag}</li>
                    ))}
                  </ul>
                </td>
                <td>{frontmatter.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { timeToRead: { gte: 5 } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        frontmatter {
          date(fromNow: true)
          title
          description
          tags
        }
      }
    }
  }
`
