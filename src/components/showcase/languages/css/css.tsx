import React, { useCallback, useState } from "react"
import { nanoid } from "nanoid/non-secure"

import { CodeBlock, Modal, IScrollPosition } from "../../../../components"
import cssShowcaseStyles from "./css.module.scss"

type CSSShowcaseProps = {
  caption: string
}

const CSSShowcase: React.FC<CSSShowcaseProps> = ({ caption, children }) => {
  const showcaseCaption = caption.replace(/_/g, ` `)
  const scope = nanoid()
  const [styles, setStyles] = useState(children?.toString() ?? ``)
  const [hasModalOpen, setModalOpen] = useState(false)
  const [sourceScrollPosition, setSourceScrollPosition] = useState<IScrollPosition>({
    x: 0,
    y: 0,
  })

  const launchModal = useCallback(() => setModalOpen(true), [])
  const dismissModal = useCallback(() => setModalOpen(false), [])

  const handleSourceInput = (e: React.FormEvent<HTMLTextAreaElement>) =>
    setStyles(e.currentTarget.value)

  const handleSourceScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollLeft: x, scrollTop: y } = e.currentTarget
    setSourceScrollPosition({ x, y })
  }

  const launchButton: React.FC = () => (
    <button className={cssShowcaseStyles.editor__launch} onClick={launchModal}>
      Open
    </button>
  )

  const dismissButton: React.FC = () => (
    <button className={cssShowcaseStyles.editor__dismiss} onClick={dismissModal}>
      close
    </button>
  )

  return (
    <div className={cssShowcaseStyles.frame}>
      <figure className={cssShowcaseStyles.root}>
        <style type="text/css">
          {`#preview-${scope},
            #live-${scope} {
            ${styles}
          }`}
        </style>
        <section className={cssShowcaseStyles.preview}>
          <div id={`preview-${scope}`} className={cssShowcaseStyles.live}></div>
          <Modal
            className={cssShowcaseStyles.editor}
            dismissButton={dismissButton}
            isOpen={hasModalOpen}
            launchButton={launchButton}
            scope={scope}
          >
            <label
              className={cssShowcaseStyles.editor__title}
              htmlFor={`source-${scope}`}
            >
              <span className={cssShowcaseStyles.editor__titleText}>
                {showcaseCaption}
              </span>
            </label>
            <textarea
              id={`source-${scope}`}
              className={cssShowcaseStyles.editor__source}
              name={`${caption}_Source`}
              onInput={handleSourceInput}
              onScroll={handleSourceScroll}
              value={styles}
            />
            <CodeBlock
              className={cssShowcaseStyles.editor__codeBlock}
              language="css"
              scrollPosition={sourceScrollPosition}
            >
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
