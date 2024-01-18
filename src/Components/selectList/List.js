import React, { useState } from "react";
import styles from "./list.module.css";
export default function SelectList({ values }) {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <div
      style={{
        backgroundColor: "#DEE8F4",
        padding: "2px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2px",
        borderRadius: "8px",
      }}
    >
      {values.map((val, i) => (
        <div
          className={styles.inputGroup}
          key={i}
          style={{
            padding: "15px 20px",
            minWidth: "200px",
            width: "100%",
          }}
        >
          <label htmlFor={val.label}>{val.label}</label>
          <input
            id={val.label}
            type="radio"
            name="res"
            value={val.value}
            // checked={value}
            onChange={() => setValue(val.value)}
          />
        </div>
      ))}
    </div>
  );
}
