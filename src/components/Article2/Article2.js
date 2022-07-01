import "./Article2.css";

function Article2({ article }) {
  //created variable to display date and time of the article from the fetched data
  const published = article?.publishedAt?.split(/T/);
  const date = published?.[0];
  const time = published?.[1].slice(0, -1);
  return (
    <article data-testid="saTestId" className="secondary">
      <div className="secondaryContainer">
        <div className="imgContainer">
          {" "}
          <img
            data-testid="saImgTestId"
            src={article?.image}
            alt={article?.title}
            className="secondaryImg"
          />
        </div>
        <section className="secondaryDesc">
          <h2 data-testid="saTitleTestId" className="secondaryDescTitle">
            <a href={article?.url} target="_blank" rel="noreferrer">
              {article?.title}
            </a>
          </h2>
          {/* reducing the content to 150 characters for a cleaner look and the user can click on the Read full article to read the full article */}

          <p data-testid="saDesceTestId" className="secondaryDescContent">
            {article?.content?.substring(0, 150)}...{" "}
            <span className="fullArticleLink">Read full article</span>
          </p>

          <p data-testid="saSrcTestId" className="articleSource">
            <span className="source">{article?.source?.name}</span>{" "}
            <span className="source">{date}</span>{" "}
            <span className="source">{time}</span>
          </p>
        </section>
      </div>
    </article>
  );
}

export default Article2;
