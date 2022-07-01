// =================================
// This component renders article in size "S" to display an image and a title only.
// ==================================
import "./ArticleS.css";

function ArticleS({ article }) {
  return (
    <div data-testid="maTestId" className="article-box">
      <div className="img-container">
        <img
          data-testid="imgTestId"
          className="image"
          src={article?.image}
          alt={article?.title}
        />
      </div>
      <div className="info-container">
        <a href={article?.url} target="_blank" rel="noreferrer">
          <h2 data-testid="titleTestId" className="mainDescTitle">
            {article?.title}
          </h2>
        </a>
      </div>
    </div>
  );
}

export default ArticleS;
