import React, { useState } from "react"
import { Link } from "gatsby"

import * as navigationStyles from "./navigation.module.scss"

const Navigation: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav
      className={`${navigationStyles.root} ${
        navOpen ? navigationStyles.open : ``
      }`}
    >
      <ul className={navigationStyles.list}>
        <li className={navigationStyles.item}>
          <Link className={navigationStyles.link} to="/">
            Home
          </Link>
        </li>
        <li className={navigationStyles.item}>
          <Link className={navigationStyles.link} to="/page-2/">
            Short read
          </Link>
        </li>
        <li className={navigationStyles.item}>
          <Link className={navigationStyles.link} to="/using-typescript/">
            Long read
          </Link>
        </li>
      </ul>
      <button
        type="button"
        className={navigationStyles.toggle}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span className={navigationStyles.toggle__text}>Menu</span>
      </button>
    </nav>
  )
}

export { Navigation }
