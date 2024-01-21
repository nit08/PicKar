"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  return (
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
          <div className="buttonSec">Login</div>
          <button>Create Account</button>
        </div>
      </header>
    </div>
  );
}
