import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [bgClass, setBgClass] = useState("bg-transparent");

  const changeBackgroundColor = () => {
    window.scrollY > 50 ? setBgClass("bg-body") : setBgClass("bg-transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-md py-1 z-1 sticky-top ${bgClass}`}
        id="navbar"
      >
        <div className="container justify-content-between align-items-center">
          <HashLink className="navbar-brand" to={"/#hero"} smooth>
            <img src={logo} alt="logo img" className="w-100" />
          </HashLink>
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
                <HashLink className="nav-link hover-sec active" to={"/#about"}>
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
