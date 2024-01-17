import React, { useState } from "react";
import classes from "./search.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Search({ value }) {
  const router = useRouter();
  const [input, setInput] = useState();
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search/?term=${input}`);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <form
        onSubmit={handleSearch}
        className="fieldCont"
        style={{
          width: "700px",
          minWidth: "280px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <Image src={"/search.svg"} alt="Search" width={30} height={30} />
          <div style={{ borderLeft: "2px solid #fff", height: "30px" }}></div>
          <input
            value={input}
            defaultValue={value}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Search"
            className={classes.search}
          />
        </div>
        <div>
          <button>GO!</button>
        </div>
      </form>
    </div>
  );
}
