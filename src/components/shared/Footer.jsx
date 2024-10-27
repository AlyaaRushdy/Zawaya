import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-row justify-content-between align-items-center gap-4 py-3 my-4 border-top">
          <HashLink to="/#hero">
            <img
              src="/src/assets/favicon.png"
              alt="logo img"
              style={{ width: "60px" }}
            />
          </HashLink>
          <ul className="list-unstyled d-flex gap-4 m-0">
            <li>
              <a href="#" className="link-primary ">
                <i className="fa-brands fa-facebook-f fa-xl hover-sec"></i>
              </a>
            </li>
            <li>
              <a href="#" className="link-primary ">
                <i className="fa-brands fa-instagram fa-xl hover-sec"></i>
              </a>
            </li>
            <li>
              <a href="#" className="link-primary ">
                <i className="fa-brands fa-whatsapp fa-xl hover-sec"></i>
              </a>
            </li>
          </ul>
          {/* <ul className="nav flex-column flex-sm-row">
            <li className="nav-item">
              <HashLink className="nav-link hover-sec" to={"/#about"}>
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link hover-sec" to={"/#ourWork"}>
                Our Work
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link hover-sec" to={"/#services"}>
                Services
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link hover-sec" to={"/#projects"}>
                Projects
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link hover-sec" to={"/#contact"}>
                Contact Us
              </HashLink>
            </li>
          </ul> */}
        </footer>
      </div>
    </>
  );
}

export default Footer;
