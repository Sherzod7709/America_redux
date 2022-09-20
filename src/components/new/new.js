// import { getRndInteger } from "../../utils";
import { Link } from "react-router-dom";
import "./new.scss";

const New = ({ article }) => {
  const time = article.publishedAt;
  return (
    <article className="news-card">
      <div>
        <h2 className="news-card__author">
          <Link to={`/bbc/${article.id}`}>
            {article.author ? article.author : "Authorless !"}
          </Link>
        </h2>
        <h3>{article.title ? article.title : "-"}</h3>
        <p>{article.description ? article.description : "-"}</p>
        {/* <p>likes:{getRndInteger(0, 99)}</p> */}
        <p>{time}</p>
        <p>{article.id}</p>
        {/* <p>id:{article.id}</p> */}
      </div>
      <img
        className="news-card__img"
        width={200}
        // height={200}
        src={article.urlToImage}
        alt="img"
      />
    </article>
  );
};
export default New;
