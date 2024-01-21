import React, { useState } from "react";
import styles from "./list.module.css";

export default function SelectList({ values }) {
  const [value, setValue] = useState(values[0].value);
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
        color: "#475467",
        fontSize: "0.9rem",
        fontFamily: "Euclid Circular B",
        fontStyle: "normal",
        fontWeight: 400,
        // maxWidth:"500px"
        width: "100%",
      }}
    >
      {values.map((val, i) => (
        <div
          className={styles.inputGroup}
          key={i}
          style={{
            // padding: "5px 0px",
            minWidth: "200px",
            width: "100%",
          }}
        >
          <input
            id={val.label}
            type="radio"
            name="res"
            value={val.value}
            checked={value == val.value}
            onChange={() => setValue(val.value)}
          />
          <label htmlFor={val.label}>
            <div>{val.label}</div>
            <div style={{ fontWeight: "bold" }}>{val.value}</div>
          </label>
        </div>
      ))}
    </div>
  );
}
