import Container from "../../components/container/container";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
// import News from "../../components/news/news";
import NewsProwider from "../../contex/news-contex";
import "./home.scss";
const Home = () => {
  return (
    <Container>
      <div className="home-list">
        <Nav />
        {/* <News /> */}
        <NewsProwider />
        <Footer />
      </div>
    </Container>
  );
};

export default Home;
