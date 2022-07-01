import Article1 from "../Article1/Article1";
import Article2 from "../Article2/Article2";
import styles from "./Main.css";

function Main({ articles }) {
  return (
    <main data-testid="mainTestId" className="main">
      {/* populate MainArticle component with the first object from the fetched data */}
      <div className="current-topic">UK</div>

      <Article1 article={articles?.[0]} />
      <hr />
      {/* populate SecondaryArticle component with all but the first object from the fetched data */}
      <section
        data-testid="mainSectionTestId"
        className={styles.secondarySection}
      >
        {articles?.slice(1).map((article) => (
          <Article2 article={article} key={article?.url} />
        ))}
      </section>
    </main>
  );
}

export default Main;
