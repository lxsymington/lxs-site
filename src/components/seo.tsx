/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactElement } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
}

type SEOProps = { title: string } & typeof defaultProps

type UrlProps = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

function SEO({ description, lang, meta, title }: SEOProps): ReactElement {
  const { site } = useStaticQuery<UrlProps>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO

SEO.defaultProps = defaultProps
