import { useEffect, useRef } from "react";
import hero1 from "../assets/images/hero/hero1.jpg";
import hero2 from "../assets/images/hero/hero2.jpg";
import hero3 from "../assets/images/hero/hero3.jpg";
import { Carousel } from "bootstrap";

function Hero() {
  const carouselRef = useRef(null);
  useEffect(() => {
    if (carouselRef.current) {
      const carousel = new Carousel(carouselRef.current, {
        interval: 5000,
        pause: false,
        ride: "carousel",
      });

      carousel.cycle();
    }
  }, []);
  return (
    <>
      <section
        id="hero-carousel"
        className="carousel slide"
        // data-bs-ride="carousel"
        // data-bs-pause="false"
        ref={carouselRef}
      >
        <div className="carousel-inner">
          {console.log(carouselRef.current)}
          <div className="carousel-item h-100 active">
            <img
              src={hero1}
              className="d-block w-100 h-100 object-fit-cover"
              alt="hero-image"
            />
            <div className="carousel-caption text-start">
              {/*d-none d-md-block*/}
              <h4>3D Modeling</h4>
            </div>
          </div>
          <div className="carousel-item h-100">
            <img
              src={hero2}
              className="d-block w-100 h-100 object-fit-cover"
              alt="hero-image"
            />
            <div className="carousel-caption text-start">
              {/*d-none d-md-block*/}
              <h4>Exterior</h4>
            </div>
          </div>
          <div className="carousel-item h-100">
            <img
              src={hero3}
              className="d-block w-100 h-100 object-fit-cover"
              alt="hero-image"
            />
            <div className="carousel-caption text-start">
              {/*d-none d-md-block*/}
              <h4>Office Interior Design</h4>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </section>
    </>
  );
}

export default Hero;
