"use client";

import { useParams, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import styles from "./results.module.css";
import Search from "@/Components/Search";
import Image from "next/image";
import Modal from "@/Components/modal/Modal";
import SelectList from "@/Components/selectList/List";

export default function SearchResults({ data, searchOptions }) {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [search, setSearch] = useState();
  const params = useParams();
  const searchTerm = params.term;

  console.log(data);
  return (
    <>
      <div>
        <div style={{ marginTop: "30px" }}>
          <Search value={searchTerm} search={search} />
        </div>
        <div className={styles.text}>Results: {searchTerm}</div>
        <div className={styles.resultsCont}>
          <div
            style={{
              backgroundColor: "#F5F5F5",
              overflowY: "auto",
              display: "flex",
              gap: "15px",
              padding: "25px 40px",
            }}
          >
            {searchOptions.map((o, i) => (
              <div
                key={i}
                className={styles.options}
                onClick={() => {
                  setSearch(o);
                }}
              >
                {o}
              </div>
            ))}
          </div>

          {(data.totalHits === 0 || data.total === 0) && (
            <div
              style={{
                width: "100%",
                height: "500px",
                padding: "40px",
                display: "flex",
                gap: "30px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {" "}
              No Results Found!
            </div>
          )}
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
            {data?.hits?.map((item, i) => {
              return (
                <div
                  key={i}
                  className={styles.card}
                  onClick={() => {
                    setOpen(true);
                    setModalData(item);
                  }}
                >
                  <Image
                    src={item.webformatURL}
                    alt="Image"
                    width={350}
                    height={280}
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
                    {item.tags.split(",").map((t) => (
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          <div
            style={{
              position: "relative",
              flex: "7",
              aspectRatio: "16/9",
              width: "100%",
              minWidth: modalData?.webformatWidth,
              minHeight: modalData?.webformatHeight,
            }}
          >
            <Image
              src={modalData?.largeImageURL}
              placeholder="blur"
              blurDataURL={modalData?.webformatURL}
              alt="image"
              fill
              style={{ borderRadius: "8px" }}
            />
          </div>
          <div style={{ flex: "3" }}>
            <div
              style={{
                color: "#3B4043",
                fontFamily: "Euclid Circular B",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: "500",
                padding: "0px 0px 25px 0px",
              }}
            >
              Download
            </div>
            <SelectList
              values={[
                { label: "Small", value: "640x960" },
                { label: "Medium", value: "1920x2660" },
                { label: "Big", value: "2400x3600" },
                { label: "Original", value: "3850x5640" },
              ]}
            />
            <a download href={modalData?.largeImageUrl}>
              <button
                style={{
                  borderRadius: "5px",
                  background: "#4BC34B",
                  color: "var(--ffffff, #FFF)",
                  textAlign: "center",
                  fontFamily: "Euclid Circular B",
                  fontWeight: "600",
                  width: "100%",
                  height: "50px",
                  margin: "20px 0px",
                }}
              >
                Download for free!
              </button>
            </a>
            <div
              style={{
                color: "#3B4043",
                fontFamily: "Euclid Circular B",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: "400",
                padding: "0px 0px 25px 0px",
              }}
            >
              Information
            </div>
            <div
              style={{
                display: "flex",
                gap: "50px",
                flexWrap: "wrap",
                // maxWidth: "500px",
                minWidth: "280px",
                width: "100%",
              }}
            >
              {[
                { title: "User", value: modalData?.user },
                { title: "User ID", value: modalData?.user_id },
                { title: "Type", value: modalData?.type },
                { title: "Views", value: modalData?.views },
                { title: "Downloads", value: modalData?.downloads },
                { title: "Likes", value: modalData?.likes },
              ].map((inf, i) => (
                <div style={{ width: "80px" }} key={i}>
                  <div className={styles.infoTitle}>{inf.title}</div>
                  <div className={styles.info}>{inf.value}</div>
                </div>
              ))}
            </div>
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
          <div
            style={{
              padding: "10px 0px",
              display: "flex",
              gap: "20px",
              overflowX: "auto",
            }}
          >
            {modalData?.tags.split(",").map((t, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#F5F5F5",
                  padding: "8px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
                onClick={() => setSearch(t)}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
