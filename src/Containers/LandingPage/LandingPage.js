"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Search from "@/Components/Search";

export default function LandingPage() {
  return (
    <div className={styles.pageCont}>
      <div className={styles.heading}>
        Discover over 2,000,000 free Stock Images
      </div>
      <Search />
      <div
        className="fieldCont"
        style={{ padding: "10px", paddingInline: "30px" }}
      >
        Trending:{" "}
        <span style={{ fontWeight: "200" }}>flowers, love, forest, river</span>
      </div>
    </div>
  );
}
