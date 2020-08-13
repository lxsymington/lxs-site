import React from "react"
import footerStyles from "./footer.module.scss"
import Initials from "../../assets/initials.inline.svg"

type FooterProps = {
  className: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`${className} ${footerStyles.root}`}>
      <small>
        &copy;{new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> by{` `}
        <Initials className={footerStyles.initials} />
      </small>
    </footer>
  )
}

export { Footer }
