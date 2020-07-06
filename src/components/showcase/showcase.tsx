import React from "react"
import Highlight, { Prism } from "prism-react-renderer"
import * as showcaseStyles from "./showcase.module.scss"

type ShowcaseProps = {
  className?: string
}

const Showcase: React.FC<ShowcaseProps> = ({ children, className }) => {
  const language = className.replace(/language-/, "")
  return (
    <Highlight Prism={Prism} code={children.trim()} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <code className={className}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <mark key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  )
}

export { Showcase }
