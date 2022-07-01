import "./Article.css";

function Article({ article }) {
  //created variable to display date and time of the article from the fetched data
  const published = article?.publishedAt?.split(/T/);
  const date = published?.[0];
  const time = published?.[1].slice(0, -1);
  return (
    <article data-testid="maTestId" className="mainArticle">
      <div className="imgContainer">
        <img
          data-testid="imgTestId"
          src={article?.image}
          alt={article?.title}
          className="mainImg"
        />
      </div>
      <section className="mainDesc">
        <h2 data-testid="titleTestId" className="mainDescTitle">
          {article?.title}
        </h2>
        <p data-testid="descTestId" className="mainDescContent">
          {article?.content?.substring(0, article?.content?.length - 15)}...{" "}
          <a href={article?.url} target="_blank" rel="noreferrer">
            <span className="fullArticleLink">Read full article</span>
          </a>
        </p>
      </section>
    </article>
  );
}

export default Article;
