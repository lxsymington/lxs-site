import React, { useState } from "react"
import { nanoid } from "nanoid/non-secure"

import { CodeBlock } from "../../../../components"
import cssShowcaseStyles from "./css.module.scss"

const CSSShowcase: React.FC = ({ children }) => {
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
          --dpr: ${window?.devicePixelRatio ?? 1};
          ${styles}
        }`}
        </style>
        <aside className={cssShowcaseStyles.preview}>
          <div className={`${cssShowcaseStyles.live} live-${scope}`}></div>
        </aside>
        {/* Image */}
        <figcaption className={cssShowcaseStyles.caption}>
          <span className={cssShowcaseStyles.caption__text}>Example title</span>
        </figcaption>
      </figure>
    </div>
  )
}

export { CSSShowcase }
