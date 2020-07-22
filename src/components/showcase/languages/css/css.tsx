import React, { useState } from "react"
import { nanoid } from "nanoid/non-secure"

import { CodeBlock, Modal } from "../../../../components"
import cssShowcaseStyles from "./css.module.scss"

type CSSShowcaseProps = {
  caption: string
}

const CSSShowcase: React.FC<CSSShowcaseProps> = ({ caption, children }) => {
  const showcaseCaption = caption.replace(/_/g, ` `)
  const [scope] = useState(nanoid)
  const [styles, setStyles] = useState(children?.toString() ?? ``)
  const [editSource, setEditSource] = useState(false)

  const open = () => {
    console.log(editSource)
    setEditSource(true)
  }

  const close = () => {
    console.log(editSource)
    setEditSource(false)
  }

  const Button: React.FC = () => (
    <button className={cssShowcaseStyles.editor__toggle} onClick={open}>
      Edit
    </button>
  )

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setStyles(e.target.value)
    console.log(document.hasFocus)
  }

  return (
    <div className={cssShowcaseStyles.frame}>
      <figure className={cssShowcaseStyles.root}>
        <style type="text/css">
          {`.${cssShowcaseStyles.live}#live-${scope} {
            ${styles}
          }`}
        </style>
        <section className={cssShowcaseStyles.preview}>
          <div id={`live-${scope}`} className={cssShowcaseStyles.live}></div>
          <Modal
            button={Button}
            className={cssShowcaseStyles.editor}
            open={editSource}
            close={close}
          >
            <label
              className={cssShowcaseStyles.editor__title}
              htmlFor={`source-${scope}`}
            >
              {showcaseCaption}
            </label>
            <textarea
              id={`source-${scope}`}
              className={cssShowcaseStyles.editor__source}
              name={`${caption}_Source`}
              onInput={handleInput}
            >
              {styles}
            </textarea>
            <CodeBlock className={cssShowcaseStyles.editor__codeBlock} language="css">
              {styles}
            </CodeBlock>
            <aside className={cssShowcaseStyles.editor__preview}>
              <div id={`live-${scope}`} className={cssShowcaseStyles.live}></div>
            </aside>
          </Modal>
        </section>
        <figcaption className={cssShowcaseStyles.caption}>
          <span className={cssShowcaseStyles.caption__text}>{showcaseCaption}</span>
        </figcaption>
      </figure>
    </div>
  )
}

export { CSSShowcase }
