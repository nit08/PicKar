let baseUrl = process.env.NODE_ENV === "production" ? "" : "";

export async function Get(url, pixabay) {
  let reqUrl = url;
  if (pixabay) {
    reqUrl = url + "&key=" + process.env.PIXABAY_API_KEY;
  }
  console.log("url", reqUrl);
  const res = await fetch(reqUrl);
  const response = await res.json();
  return response;
}
