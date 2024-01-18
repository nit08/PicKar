"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import styles from "./results.module.css";
import Search from "@/Components/Search";
import Image from "next/image";
import Modal from "@/Components/modal/Modal";
import SelectList from "@/Components/selectList/List";

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
  "Marketing",
];

export default function SearchResults() {
  const [open, setOpen] = useState(false);
  const params = useSearchParams();
  const searchTerm = params.get("term");

  return (
    <>
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
                <div
                  key={i}
                  className={styles.card}
                  onClick={() => setOpen(true)}
                >
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`Preview ID: 234`}
        closeButton
      >
        <div style={{ display: "flex" }}>
          <div style={{ position: "relative", flex: "2", aspectRatio: "16/9" }}>
            <Image
              src={"/images/back.png"}
              alt="image"
              fill
              style={{ borderRadius: "8px" }}
            />
          </div>
          <div style={{ flex: "1", marginLeft: "30px" }}>
            <SelectList
              values={[
                { label: "Small", value: "640x960" },
                { label: "Medium", value: "1920x2660" },
                { label: "Big", value: "2400x3600" },
                { label: "Original", value: "3850x5640" },
              ]}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            padding: "30px 0px 10px 0px",
          }}
        >
          <span
            style={{
              color: "#3B4043",
              fontFamily: "Euclid Circular B",
              fontSize: "17.771px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "51.447px",
            }}
          >
            Tags:
          </span>
          {options.map((t) => (
            <div
              key={t}
              style={{
                backgroundColor: "#F5F5F5",
                padding: "8px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
