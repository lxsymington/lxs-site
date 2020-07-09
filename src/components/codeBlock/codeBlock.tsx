import React from "react"
import Highlight, { Prism, Language } from "prism-react-renderer"
import * as codeBlockStyles from "./codeBlock.module.scss"

type CodeBlockProps = {
  className?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const language = (className?.replace(/language-/, ``) ?? `diff`) as Language
  return (
    <Highlight Prism={Prism} code={(children as string).trim()} language={language}>
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

export { CodeBlock }
