import React from "react";
import ReactModal from "react-modal";
import styles from "./modal.module.css"
import Image from "next/image";
export default function Modal({ children, open, onClose, title, closeButton }) {
  return (
    <ReactModal isOpen={open} onRequestClose={onClose} style={modalStyles}>
      <div className={styles.modalHeading}>
        {title}
        {closeButton && (
          <div className={styles.closeModal} onClick={onClose}>
            <Image
              src={"/close.svg"}
              alt="close button"
              width={30}
              height={30}
            />
          </div>
        )}
      </div>
      <div className={styles.modalBody}>{children}</div>
    </ReactModal>
  );
}

const modalStyles = {
  overlay: {
    position: "fixed",
    zIndex: 1020,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.50)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    background: "white",
    // width: "80%",
    maxWidth: "calc(100vw - 2rem)",
    // maxWidth:"90%",
    maxHeight: "calc(100vh - 2rem)",
    overflowY: "auto",
    position: "relative",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "0px",
  },
};
