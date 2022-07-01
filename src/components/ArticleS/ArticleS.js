// =================================
// This component renders article in size "S" to display an image and a title only.
// ==================================
import "./ArticleS.css";

function ArticleS({ article }) {
  return (
    <div data-testid="maTestId" className="article-box-S">
      <div className="img-container-S">
        <img
          data-testid="imgTestId"
          className="image-S"
          src={article?.image}
          alt={article?.title}
        />
      </div>
      <div className="info-container-S">
        <a href={article?.url} target="_blank" rel="noreferrer">
          <h2 data-testid="titleTestId" className="title-S">
            {article?.title}
          </h2>
        </a>
      </div>
    </div>
  );
}

export default ArticleS;
