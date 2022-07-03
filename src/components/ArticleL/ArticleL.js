// =================================
// This component renders article in size "L" to display an image, a title, description, source, date, time.
// ==================================
import "./ArticleL.css";

function ArticleL({ article }) {
  //variables are declared to display date and time of the article from the fetched data
  const published = article?.publishedAt?.split(/T/);
  const date = published?.[0];
  const time = published?.[1].slice(0, -1);
  return (
    <article data-testid="maTestId" className="article-box-L">
      <div className="img-container-L">
        <img
          data-testid="imgTestId"
          className="image-L"
          src={article?.image}
          alt={article?.title}
        />
      </div>
      <div className="info-container-L">
        <a href={article?.url} target="_blank" rel="noreferrer">
          <h2 data-testid="titleTestId" className="title-L">
            {article?.title}
          </h2>
        </a>
        <div className="p-L-container">
          <a href={article?.url} target="_blank" rel="noreferrer">
            <p data-testid="descTestId" className="p-L">
              {article?.description}
            </p>
          </a>
        </div>
        <p data-testid="srcTestId" className="source-L">
          <span>{article?.source?.name}</span>
          <span>{date}</span>
          <span>{time}</span>
        </p>
      </div>
    </article>
  );
}

export default ArticleL;
