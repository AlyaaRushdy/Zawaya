import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md py-1">
        <div className="container justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo img" className="w-100" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars text-primary"></i>
          </button>
          <div
            className="collapse navbar-collapse text-center text-lg-start"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav gap-3 row-gap-1 mx-auto text-center text-lg-start">
              <li className="nav-item">
                <a
                  className="nav-link hover-sec active"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-sec" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover-sec" href="#">
                  Projects
                </a>
              </li>
            </ul>
            <HashLink
              to={"/#contact"}
              smooth
              className="btn btn-primary mb-2 mb-lg-0 ms-auto ms-lg-0 px-4 py-2 col-8 col-sm-6 col-md-auto"
            >
              Contact Us
            </HashLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
