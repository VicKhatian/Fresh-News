import Article1 from "../Article1/Article1";
import "./Main.css";

function Main({ articles }) {
  return (
    <main data-testid="mainTestId" className="container">
      {/* populate MainArticle component with the first object from the fetched data */}
      <div className="topic">topic</div>
      <div className="topic"></div>
      <div className="article1">
        <Article1 article={articles?.[0]} />
      </div>
      <div className="article2">
        <Article1 article={articles?.[1]} />
      </div>
      <div className="article3">
        <Article1 article={articles?.[2]} />
      </div>
      <div className="article4">
        <Article1 article={articles?.[3]} />
      </div>
      <div className="article5">
        <Article1 article={articles?.[4]} />
      </div>
      <div className="article6">
        <Article1 article={articles?.[5]} />
      </div>
      <div className="article7">
        <Article1 article={articles?.[6]} />
      </div>
      <div className="article8">
        <Article1 article={articles?.[7]} />
      </div>
      <div className="article9">
        <Article1 article={articles?.[8]} />
      </div>
      <div className="article10">
        <Article1 article={articles?.[9]} />
      </div>

      <hr />
    </main>
  );
}

export default Main;
