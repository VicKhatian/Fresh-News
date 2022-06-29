import styles from "./Article2.css";

function Article2({ article }) {
  //created variable to display date and time of the article from the fetched data
  const published = article?.publishedAt?.split(/T/);
  const date = published?.[0];
  const time = published?.[1].slice(0, -1);
  return (
    <article data-testid="saTestId" className={styles.secondary}>
      <div className={styles.secondaryContainer}>
        <div className={styles.imgContainer}>
          {" "}
          <img
            data-testid="saImgTestId"
            src={article?.image}
            alt={article?.title}
            className={styles.secondaryImg}
          />
        </div>
        <section className={styles.secondaryDesc}>
          <h2 data-testid="saTitleTestId" className={styles.secondaryDescTitle}>
            <a href={article?.url} target="_blank" rel="noreferrer">
              {article?.title}
            </a>
          </h2>
          {/* reducing the content to 150 characters for a cleaner look and the user can click on the Read full article to read the full article */}

          <p
            data-testid="saDesceTestId"
            className={styles.secondaryDescContent}
          >
            {article?.content?.substring(0, 150)}...{" "}
            <span className={styles.fullArticleLink}>Read full article</span>
          </p>

          <p data-testid="saSrcTestId" className={styles.articleSource}>
            <span className={styles.source}>{article?.source?.name}</span>{" "}
            <span className={styles.source}>{date}</span>{" "}
            <span className={styles.source}>{time}</span>
          </p>
        </section>
      </div>
    </article>
  );
}

export default Article2;
