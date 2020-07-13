import React, { useState } from "react"
import { nanoid } from "nanoid/non-secure"

import { CodeBlock } from "../../../../components"
import cssShowcaseStyles from "./css.module.scss"

type CSSShowcaseProps = {
  caption: string
}

const CSSShowcase: React.FC<CSSShowcaseProps> = ({ caption, children }) => {
  const [scope] = useState(nanoid)
  const [styles, setStyles] = useState(children?.toString() ?? ``)

  return (
    <div className={cssShowcaseStyles.frame}>
      <figure className={cssShowcaseStyles.root}>
        <CodeBlock className={cssShowcaseStyles.source} language="css">
          {styles}
        </CodeBlock>
        {/* Preview */}
        <style type="text/css">
          {`.${cssShowcaseStyles.live}.live-${scope} {
            ${styles}
          }`}
        </style>
        <aside className={cssShowcaseStyles.preview}>
          <div className={`${cssShowcaseStyles.live} live-${scope}`}></div>
        </aside>
        {/* Image */}
        <figcaption className={cssShowcaseStyles.caption}>
          <span className={cssShowcaseStyles.caption__text}>
            {caption.replace(/_/g, ` `)}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}

export { CSSShowcase }
