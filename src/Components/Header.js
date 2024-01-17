import React from "react";

export default function Header() {
  return (
    <div style={{ padding: "50px" }}>
      <header
        className="fieldCont"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>Homepage</div>
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
