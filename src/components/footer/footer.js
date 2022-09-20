import "./footer.scss";
import Icons from "../../assets/img/News.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer-list">
      <header>
        <img className="footer-Icon" src={Icons} alt="Icon" />
      </header>
      <main className="footer-page-right">
        <div className="Footer-list__spage">
          <h4>About our</h4>
          <p>nimadir</p>
          <p>nimadir</p>
          <p>nimadir</p>
        </div>
        <div className="Footer-list__spage">
          <h4>World News</h4>
          <p>nimadir</p>
          <p>nimadir</p>
          <p>nimadir</p>
        </div>
        <div className="Footer-list__spage">
          <h4>Contact</h4>
          <p>web-site</p>
          <p>telegram</p>
          <p>instagram</p>
          <p>facebook</p>
          <p>email</p>
        </div>
      </main>
    </footer>
  );
};
export default Footer;
