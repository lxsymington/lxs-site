import React from "react"

import { CodeBlock } from "../../../components"

const CSSShowcase: React.FC = ({ children }) => {
  console.log(children)
  return (
    <figure className="temp">
      {/* Preview */}
      <CodeBlock language="css">{children}</CodeBlock>
      {/* Image */}
      <figcaption>Example title</figcaption>
    </figure>
  )
}

export { CSSShowcase }
