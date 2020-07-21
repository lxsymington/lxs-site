import React, { useState } from "react"
import { nanoid } from "nanoid/non-secure"

import { CodeBlock, Modal } from "../../../../components"
import cssShowcaseStyles from "./css.module.scss"

type CSSShowcaseProps = {
  caption: string
}

const CSSShowcase: React.FC<CSSShowcaseProps> = ({ caption, children }) => {
  const [scope] = useState(nanoid)
  const [styles, setStyles] = useState(children?.toString() ?? ``)
  const [editSource, setEditSource] = useState(false)

  const Button: React.FC = () => (
    <button className={cssShowcaseStyles.edit} onClick={() => setEditSource(!editSource)}>
      Edit
    </button>
  )

  const close = () => {
    console.log(`Closing`)
    setEditSource(false)
  }

  return (
    <div className={cssShowcaseStyles.frame}>
      <figure className={cssShowcaseStyles.root}>
        <section className={cssShowcaseStyles.source}>
          <CodeBlock className={cssShowcaseStyles.codeBlock} language="css">
            {styles}
          </CodeBlock>
          <Modal button={Button} open={editSource} close={close}>
            Hello
          </Modal>
        </section>
        {/* Preview */}
        <style type="text/css">
          {`.${cssShowcaseStyles.live}#live-${scope} {
            ${styles}
          }`}
        </style>
        <aside className={cssShowcaseStyles.preview}>
          <div id={`live-${scope}`} className={cssShowcaseStyles.live}></div>
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
