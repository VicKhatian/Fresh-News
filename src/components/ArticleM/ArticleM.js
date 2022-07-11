// =================================
// This component renders article in size "M" to display an image, a title and a description.
// ==================================
import "./ArticleM.css";

function ArticleM({ article }) {
  return (
    <article data-testid="maTestId" className="article-box-M">
      <div className="img-M-container">
        <img
          data-testid="imgTestId"
          className="image-M"
          src={article?.image}
          alt={article?.title}
        />
      </div>
      <div className="title-M-container">
        <a href={article?.url} target="_blank" rel="noreferrer">
          <h2 data-testid="title-M" className="title-M">
            {article?.title}
          </h2>
        </a>
      </div>
      <div className="p-M-container">
        <a href={article?.url} target="_blank" rel="noreferrer">
          <p data-testid="descTestId" className="p-M">
            {article?.description}
          </p>
        </a>
      </div>
    </article>
  );
}

export default ArticleM;
