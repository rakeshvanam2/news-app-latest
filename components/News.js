
import React from 'react';
import { useQuery } from 'react-query';
import { fetchNewsArticles } from './newsAPI';

const News = () => {
  const { isLoading, isError, data } = useQuery('news', fetchNewsArticles);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching news articles</div>;

  return (
    <div>
      <h1>Latest News</h1>
      {data.articles.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
