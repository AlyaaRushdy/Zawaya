import { useEffect, useRef } from "react";
import hero1 from "../assets/images/hero/hero1.jpg";
import hero2 from "../assets/images/hero/hero2.jpg";
import hero3 from "../assets/images/hero/hero3.jpg";
import hero4 from "../assets/images/hero/hero4.jpg";
import { Carousel } from "bootstrap";

function Hero() {
  const heroCarouselRef = useRef(null);

  useEffect(() => {
    let heroCarousel;

    if (heroCarouselRef.current) {
      heroCarousel = new Carousel(heroCarouselRef.current, {
        interval: 5000,
        pause: false,
        ride: "carousel",
      });
      heroCarousel.cycle();
    }

    return () => {
      if (heroCarousel) {
        heroCarousel.dispose();
      }
    };
  }, []);

  return (
    <>
      <section
        id="hero-carousel"
        className="carousel slide"
        // data-bs-ride="carousel"
        // data-bs-pause="false"
        ref={heroCarouselRef}
      >
        <div className="carousel-inner">
          <div className="carousel-item h-100 active">
            <img
              src={hero1}
              className="d-block w-100 h-100 object-fit-cover"
              alt="hero-image"
            />
            {/* <div className="carousel-caption text-start">
              <h4>3D Modeling</h4>
            </div> */}
          </div>
          <div className="carousel-item h-100">
            <img
              src={hero2}
              className="d-block w-100 h-100 object-fit-cover"
              alt="hero-image"
            />
            {/* <div className="carousel-caption text-start">
              <h4>Exterior</h4>
            </div> */}
          </div>
          <div className="carousel-item h-100">
            <img
              src={hero3}
              className="d-block w-100 h-100 object-fit-cover"
              alt="hero-image"
            />
            {/* <div className="carousel-caption text-start">
              <h4>Office Interior Design</h4>
            </div> */}
          </div>
          <div className="carousel-item h-100">
            <img
              src={hero4}
              className="d-block w-100 h-100 object-fit-cover"
              alt="hero-image"
            />
            {/* <div className="carousel-caption text-start">
              <h4>Office Interior Design</h4>
            </div> */}
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
