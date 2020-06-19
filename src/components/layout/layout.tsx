/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header, Navigation } from "../../components"
import "./layout.scss"
import Initials from "../../assets/initials.inline.svg"
import * as layoutStyles from "./layout.module.scss"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery<DataProps>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={layoutStyles.grid}>
      <Header
        className={layoutStyles.header}
        siteTitle={data.site.siteMetadata.title}
      />
      <aside className={layoutStyles.aside}>
        <Navigation />
      </aside>
      <main className={layoutStyles.main}>
        <div className={layoutStyles.content}>{children}</div>
      </main>
      <footer className={layoutStyles.footer}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> by{" "}
        <Initials className={layoutStyles.initials} />
      </footer>
    </div>
  )
}

export { Layout }
