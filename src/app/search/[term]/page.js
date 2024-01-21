import SearchResults from "@/Containers/SearchResults/SearchResults";
import { Get } from "@/lib/apiCalls";
import React from "react";

export default async function page({ params }) {
  const data = await Get(
    `https://pixabay.com/api/?q=${params.term}`,
    true
  );
  let tags = [];

  data.hits.map((i) => {
    const imageTags = i.tags.split(",");
    imageTags.map((t) => {
      if (!tags.includes(t)) {
        tags.push(t);
      }
    });
  });
  return <SearchResults data={data} searchOptions={tags} />;
}
