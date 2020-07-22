import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"

import { dialogue as dialogueClass } from "../layout/layout.module.scss"
import modalStyles from "./modal.module.scss"

type ModalProps = {
  button: React.FC
  className: string
  open: boolean
  close: () => void
}

const Modal: React.FC<ModalProps> = ({
  button: Button,
  children,
  className,
  close,
  open,
}) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement>()
  const [dialogue, setDialogue] = useState<HTMLElement>()

  const Dialogue: React.FC = ({ children }) => (
    <div className={`${className} ${modalStyles.content}`}>
      {children}
      <button onClick={close}>Close</button>
    </div>
  )

  useEffect(() => {
    const modalRootElement = modalRoot ?? document.getElementById(`ModalRoot`)
    const dialogueElement = document.createElement(`section`)
    dialogueElement.classList.add(dialogueClass)
    dialogueElement.classList.add(modalStyles.backdrop)

    if (!modalRootElement) {
      throw Error("No `#ModalRoot` element available, please ensure one is present")
    }

    setModalRoot(modalRootElement)
    setDialogue(dialogueElement)
  }, [])

  useEffect(() => {
    console.log(open, modalRoot, dialogue)
    if (!open) {
      modalRoot?.removeChild(dialogue as HTMLElement)
    } else {
      modalRoot?.appendChild(dialogue as HTMLElement)
    }

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
