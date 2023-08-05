const apiKey = "";

export async function fetchNewsArticles() {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data;
}
