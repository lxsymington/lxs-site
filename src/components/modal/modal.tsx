import React, { memo, useEffect, useState } from "react"
import { createPortal } from "react-dom"

import { dialogue as dialogueClass } from "../layout/layout.module.scss"
import modalStyles from "./modal.module.scss"

type ModalProps = {
  className: string
  dismissButton: React.FC
  isOpen: boolean
  launchButton: React.FC
  scope: string
}

const ModalComponent: React.FC<ModalProps> = ({
  children,
  className,
  dismissButton: DismissButton,
  isOpen,
  launchButton: LaunchButton,
  scope,
}) => {
  const [isStateOpen, setIsStateOpen] = useState(isOpen)

  useEffect(() => {
    setIsStateOpen(isOpen)
  }, [isOpen])

  return (
    <>
      <LaunchButton />
      {isStateOpen
        ? createPortal(
            <section
              id={`dialogue-${scope}`}
              className={`${dialogueClass} ${modalStyles.backdrop}`}
            >
              <div className={`${className} ${modalStyles.content}`}>
                {children}
                <DismissButton />
              </div>
            </section>,
            document.body
          )
        : null}
    </>
  )
}

const Modal = memo(ModalComponent)

export { Modal }
