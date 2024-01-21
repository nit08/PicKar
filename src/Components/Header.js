"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ReactModal from "react-modal";
import LoginForm from "./Login/LoginForm";

export default function Header() {
  const router = useRouter();
  const [login, setlogin] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 10px",
        }}
      >
        <header
          className="fieldCont"
          style={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="buttonSec" onClick={() => router.push("/")}>
            Homepage
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "20px",
            }}
          >
            <div className="buttonSec" onClick={() => setlogin(true)}>
              Login
            </div>
            <button>Create Account</button>
          </div>
        </header>
      </div>
      <ReactModal
        isOpen={login}
        onRequestClose={() => setlogin(false)}
        style={modalStyles}
        ariaHideApp={false}
      >
        <LoginForm onClose={() => setlogin(false)} />
      </ReactModal>
    </>
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
