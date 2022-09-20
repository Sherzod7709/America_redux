import New from "../new/new";

const News = ({ news }) => {
  return (
    <div>
      {news.map((article) => (
        <New key={article.id} article={article} />
      ))}
    </div>
  );
};
export default News;

// const word = "nimadur";
// localStorage.setItem("word", word);
