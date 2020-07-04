import React from "react"
import Highlight, { Prism } from "prism-react-renderer"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { mdx } from "@mdx-js/react"
import * as showcaseStyles from "./showcase.module.scss"

type ShowcaseProps = {
  className?: string
  live: boolean
  render: boolean
}

const Showcase: React.FC<ShowcaseProps> = ({
  children,
  className,
  live,
  render,
}) => {
  const language = className.replace(/language-/, "")
  if (live) {
    return (
      <section className={showcaseStyles.root}>
        <LiveProvider
          code={children.trim()}
          transformCode={code => "/** @jsx mdx */" + code}
          scope={{ mdx }}
        >
          <LivePreview className={showcaseStyles.live} />
          <LiveEditor className={showcaseStyles.source} />
          <LiveError />
        </LiveProvider>
      </section>
    )
  }
  if (render) {
    return (
      <div className={showcaseStyles.root}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }
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
