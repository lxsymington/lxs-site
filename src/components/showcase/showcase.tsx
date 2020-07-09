import React from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { mdx } from "@mdx-js/react"

import { CodeBlock } from "../../components"
import showcaseStyles from "./showcase.module.scss"

type ShowcaseProps = {
  className?: string
  live: boolean
  render: boolean
}

const Showcase: React.FC<ShowcaseProps> = ({ children, className, live, render }) => {
  if (live) {
    return (
      <figure className={showcaseStyles.root}>
        <LiveProvider
          code={(children as string).trim()}
          transformCode={code => `/** @jsx mdx */` + code}
          scope={{ mdx }}
          theme={undefined}
        >
          <LivePreview className={showcaseStyles.live} />
          <label>
            <span>Editor</span>
            <LiveEditor className={className} theme={undefined} />
          </label>
          <LiveError />
        </LiveProvider>
        <figcaption>Example title</figcaption>
      </figure>
    )
  }

  if (render) {
    return (
      <div>
        <LiveProvider code={children as string}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return <CodeBlock className={className}>{children}</CodeBlock>
}

export { Showcase }
