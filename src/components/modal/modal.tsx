import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"

import { dialogue as dialogueClass } from "../layout/layout.module.scss"
import modalStyles from "./modal.module.scss"

type ModalProps = {
  button: React.FC
  open: boolean
  close: () => void
}

const Modal: React.FC<ModalProps> = ({ button: Button, children, close, open }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement>()
  const [dialogue, setDialogue] = useState<HTMLElement>()

  const Dialogue: React.FC = ({ children }) => (
    <div className={modalStyles.content}>
      {children}
      <button onClick={close}>Close</button>
    </div>
  )

  useEffect(() => {
    const modalRootElement = document.getElementById(`ModalRoot`)

    if (!modalRootElement) {
      throw Error("No `#ModalRoot` element available, please ensure one is present")
    }

    if (!open) {
      modalRoot?.removeChild(dialogue as HTMLElement)
      return
    }

    const dialogueElement =
      [...modalRootElement.children].find(element =>
        element.classList.contains(dialogueClass)
      ) ?? modalRootElement.appendChild(document.createElement(`section`))

    if (!dialogueElement.classList.contains(dialogueClass)) {
      dialogueElement.classList.add(dialogueClass)
    }

    if (!dialogueElement.classList.contains(modalStyles.backdrop)) {
      dialogueElement.classList.add(modalStyles.backdrop)
    }

    setModalRoot(modalRootElement)
    setDialogue(dialogueElement as HTMLElement)

    return () => {
      modalRoot?.removeChild(dialogue as HTMLElement)
    }
  }, [open])

  return (
    <>
      <Button />
      {open && createPortal(<Dialogue>{children}</Dialogue>, dialogue as HTMLElement)}
    </>
  )
}

export { Modal }
