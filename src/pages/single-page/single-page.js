import { useParams } from "react-router-dom";
import Container from "../../components/container/container";
import Nav from "../../components/nav/nav";
import "./single-page.scss";
import Footer from "../../components/footer/footer";
import { useSelector } from "react-redux";

const SinglePage = () => {
  const { id } = useParams();

  const news = useSelector((state) => state.news.news);
  const currentNew = news.find((neww) => neww.id === +id);
  console.log(news);
  if (!currentNew) {
    return (
      <h3 style={{ fontSize: 30, color: "red", textAlign: "center" }}>
        No news
      </h3>
    );
  }
  return (
    <Container>
      <Nav></Nav>
      <h2>Author: {currentNew.author ? currentNew.author : "Authorless !"}</h2>
      <div className="single-page__list">
        <div className="single-page__list-top-left">
          <div>
            <h3>{currentNew.title}</h3>
            <p>{currentNew.content}</p>
            <p>{currentNew.description}</p>
          </div>
          <div className="single-page__url">
            <a href={currentNew.url}>Link</a>
            <span>{currentNew.publishedAt}</span>
          </div>
        </div>
        <img
          className="single-page__img"
          src={currentNew.urlToImage}
          alt="No new's img"
        />
      </div>
      <Footer />
    </Container>
  );
};
export default SinglePage;
