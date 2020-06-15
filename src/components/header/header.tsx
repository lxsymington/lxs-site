import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"

const defaultProps = {
  className: ``,
  siteTitle: ``,
}

type HeaderProps = typeof defaultProps

const Header: React.FC<HeaderProps> = ({
  className,
  siteTitle,
}: HeaderProps) => (
  <header className={`${className} ${headerStyles.root}`}>
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

Header.defaultProps = defaultProps
