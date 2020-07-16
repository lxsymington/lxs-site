import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Modal: React.FC = ({ children }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement>()
  const [dialogue, setDialogue] = useState<HTMLElement>()

  useEffect(() => {
    const modalRootElement = document.getElementById(`ModalRoot`) ?? void 0
    const dialogueElement = document.createElement(`section`)
    modalRootElement?.appendChild(dialogueElement)
    setModalRoot(modalRootElement)
    setDialogue(dialogueElement)

    return () => {
      modalRoot?.removeChild(dialogue as HTMLElement)
    }
  }, [])

  return (
    <>
      <button>Launch modal</button>
      {createPortal(children, dialogue as HTMLElement)}
    </>
  )
}

export { Modal }
