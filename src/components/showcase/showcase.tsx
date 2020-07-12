import React from "react"
import { Language } from "prism-react-renderer"

import { CodeBlock } from "../../components"
import showcaseStyles from "./showcase.module.scss"

import { CSSShowcase } from "./languages"

type ShowcaseProps = {
  className?: string
}

const Showcase: React.FC<ShowcaseProps> = ({ children, className }) => {
  const language = (className?.replace(/language-/, ``) ?? `diff`) as Language

  switch (language) {
    case `css`:
      return <CSSShowcase>{children}</CSSShowcase>
    /* case `javascript`: */
    /*   return <div></div> */
    default:
      return <CodeBlock language={language}>{children}</CodeBlock>
  }
}

export { Showcase }
