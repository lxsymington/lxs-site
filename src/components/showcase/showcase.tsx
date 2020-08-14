import React from "react"
import { Language } from "prism-react-renderer"

import { CodeBlock } from "../../components"

import { CSSShowcase } from "./languages"

type ShowcaseProps = {
  caption: string
  className?: string
  showcase: boolean
}

const Showcase: React.FC<ShowcaseProps> = ({
  showcase,
  caption,
  children,
  className,
}) => {
  const language = (className?.replace(/language-/, ``) ?? `diff`) as Language

  switch (language) {
    case `css`:
      return showcase ? (
        <CSSShowcase caption={caption}>{children}</CSSShowcase>
      ) : (
        <CodeBlock language={language}>{children}</CodeBlock>
      )
    /* case `javascript`: */
    /*   return <div></div> */
    default:
      return <CodeBlock language={language}>{children}</CodeBlock>
  }
}

export { Showcase }
