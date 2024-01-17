"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import styles from "./results.module.css";
import Search from "@/Components/Search";
import Image from "next/image";

const data = [
  { image: "/images/back.png", tags: ["one", "two", "three"] },
  { image: "/images/back2.png", tags: ["Hi", "Hello", "Konichiwa"] },
  { image: "/images/back.png", tags: ["one", "two", "three"] },
  { image: "/images/back2.png", tags: ["Hi", "Hello", "Konichiwa"] },
  { image: "/images/back.png", tags: ["one", "two", "three"] },
  { image: "/images/back2.png", tags: ["Hi", "Hello", "Konichiwa"] },
  { image: "/images/back.png", tags: ["one", "two", "three"] },
  { image: "/images/back2.png", tags: ["Hi", "Hello", "Konichiwa"] },
];
const options = [
  "Digital",
  "Computing",
  "Tech",
  "Netz",
  "Code",
  "Marketing",
  "Digital",
  "Computing",
  "Tech",
  "Netz",
  "Code",
  "Marketing",
  "Digital",
  "Computing",
  "Tech",
  "Netz",
  "Code",
  "Marketing",
];

export default function SearchResults() {
  const params = useSearchParams();
  const searchTerm = params.get("term");
  return (
    <div>
      <div style={{ marginTop: "30px" }}>
        <Search value={searchTerm} />
      </div>
      <div className={styles.text}>Results: {searchTerm}</div>
      <div className={styles.resultsCont}>
        <div
          style={{
            backgroundColor: "#F5F5F5",
            overflowY: "auto",
            display: "flex",
            gap: "15px",
            padding: "30px 40px",
          }}
        >
          {options.map((o) => (
            <div key={o} className={styles.options}>
              {o}
            </div>
          ))}
        </div>
        <div
          style={{
            width: "100%",
            padding: "40px",
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {data.map(({ image, tags }, i) => {
            return (
              <div key={i} className={styles.card}>
                <Image
                  src={image}
                  alt="Card"
                  width={400}
                  height={300}
                  style={{ borderRadius: "7px" }}
                />
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    flexWrap: "wrap",
                    marginTop: "10px",
                    color: "#767676 ",
                  }}
                >
                  {tags.map((t) => (
                    <div
                      key={t}
                      style={{
                        backgroundColor: "#F5F5F5",
                        padding: "10px",
                        cursor: "pointer",
                      }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
