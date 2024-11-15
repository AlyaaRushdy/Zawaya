import { HashLink } from "react-router-hash-link";
import logoSec from "/src/assets/favicon.png";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-row justify-content-between align-items-center gap-4 py-3 my-4 border-top">
          <HashLink to="/#hero">
            <img src={logoSec} alt="logo img" style={{ width: "60px" }} />
          </HashLink>
          <ul className="list-unstyled d-flex gap-4 m-0">
            <li>
              <a
                href="https://www.facebook.com/Construction.decor.service/"
                className="link-primary"
              >
                <i className="fa-brands fa-facebook-f fa-xl hover-sec"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@zawaya_decor"
                className="link-primary"
              >
                <i className="fa-brands fa-tiktok fa-xl hover-sec"></i>
              </a>
            </li>
            <li>
              <a href="https://wa.me/+201119990170" className="link-primary">
                <i className="fa-brands fa-whatsapp fa-xl hover-sec"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
