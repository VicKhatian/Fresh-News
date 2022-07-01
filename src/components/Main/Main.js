import ArticleS from "../ArticleS/ArticleS";
import ArticleM from "../ArticleM/ArticleM";
import ArticleL from "../ArticleL/ArticleL";

import "./Main.css";

function Main({ articles }) {
  return (
    <main data-testid="mainTestId" className="container">
      {/* populate MainArticle component with the first object from the fetched data */}
      <div className="topic">topic</div>
      <div className="topic"></div>
      <div className="article1">
        <ArticleL article={articles?.[0]} />
      </div>
      <div className="article2">
        <ArticleS article={articles?.[1]} />
      </div>
      <div className="article3">
        <ArticleS article={articles?.[2]} />
      </div>
      <div className="article4">
        <ArticleS article={articles?.[3]} />
      </div>
      <div className="article5">
        <ArticleS article={articles?.[4]} />
      </div>
      <div className="article6">
        <ArticleM article={articles?.[5]} />
      </div>
      <div className="article7">
        <ArticleM article={articles?.[6]} />
      </div>
      <div className="article8">
        <ArticleM article={articles?.[7]} />
      </div>
      <div className="article9">
        <ArticleM article={articles?.[8]} />
      </div>
      <div className="article10">
        <ArticleM article={articles?.[9]} />
      </div>

      <hr />
    </main>
  );
}

export default Main;
