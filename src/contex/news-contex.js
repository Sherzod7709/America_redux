import { useEffect, useState } from "react";
import "./news-contex.scss";
import { useDispatch } from "react-redux/es/exports";
// import { setNewss } from "../store/actions/news";
import { useSelector } from "react-redux";
import News from "../components/news/news";
import { newsActions } from "../store/reducers/newsR";
let nol = -20;

const NewsProwider = () => {
  const [loading, setLoading] = useState(false);

  const news = useSelector((state) => state.news.news);

  useEffect(() => {}, []);

  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    fetch("https://newsapi.org/v2/top-headlines?country=us", {
      headers: {
        Authorization: "23f33805bfe141e181b5de2b72f34ac1",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const datas = data.articles;
        const newsArray = datas.map((neww) => {
          return {
            ...neww,
            id: nol++,
          };
        });
        console.log(newsArray);
        dispatch(
          newsActions.setNews({
            news: newsArray,
          })
        );
      })
      .finally(() => setLoading(false));
  }, [dispatch]);
  if (loading) {
    return <p className="news-contex__loading loader"></p>;
  }

  return <News news={news} />;
};
export default NewsProwider;
