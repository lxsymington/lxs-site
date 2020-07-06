import React from "react"
import { Link } from "gatsby"
import GithubMark from "../../assets/github_mark.inline.svg"
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
    <strong className={headerStyles.title}>
      <Link to="/" className={headerStyles.link}>
        {siteTitle}
      </Link>
    </strong>
    <a
      className={headerStyles.social}
      href="https://github.com/lxsymington"
      title="Luke Xavier Symington's Github Profile"
    >
      <GithubMark className={headerStyles.social__icon} />
      <span className={headerStyles.social__text}>
        &nbsp;&mdash;&nbsp;See my Github Profile
      </span>
    </a>
  </header>
)

export { Header }

Header.defaultProps = defaultProps
