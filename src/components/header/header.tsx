import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"

type DataProps = {
  siteTitle: string
}

const Header: React.FC<DataProps> = ({ siteTitle } = { siteTitle: `` }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.container}>
      <h1 className={headerStyles.title}>
        <Link to="/" className={headerStyles.link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export { Header }
