import React from "react"
import Highlight, { Prism, Language } from "prism-react-renderer"
import * as codeBlockStyles from "./codeBlock.module.scss"

type CodeBlockProps = {
  className?: string
  language: Language
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  className: customClass,
  language,
}) => {
  return (
    <Highlight Prism={Prism} code={(children as string).trim()} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${customClass} ${codeBlockStyles.root}`}>
          <code className={`${className} ${codeBlockStyles.code}`}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <mark key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}

export { CodeBlock }
