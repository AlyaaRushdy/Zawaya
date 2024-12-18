import { useEffect, useRef } from "react";
import hero1 from "../assets/images/hero/hero1.jpg";
import hero2 from "../assets/images/hero/hero2.jpg";
import hero3 from "../assets/images/hero/hero3.jpg";
import hero4 from "../assets/images/hero/hero4.jpg";
import hero4Phone from "../assets/images/hero/hero4-phone2.jpg";

const heroImages = [hero1, hero2, hero3, hero4];

function Hero() {
  const heroCarouselRef = useRef(null);

  useEffect(() => {
    let heroCarousel;

    if (heroCarouselRef.current) {
      heroCarousel = new window.bootstrap.Carousel(heroCarouselRef.current, {
        interval: 5000,
        pause: false,
        ride: "carousel",
      });
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
        ref={heroCarouselRef}
      >
        <div className="carousel-inner">
          {heroImages.map((imgSrc, i) => (
            <div
              className={`carousel-item h-100 ${i === 0 ? "active" : ""}`}
              key={i}
            >
              {imgSrc == hero4 && (
                <img
                  src={hero4Phone}
                  className="d-block d-lg-none w-100 h-100 object-fit-cover"
                  alt="hero-image"
                />
              )}
              <img
                src={imgSrc}
                className={`${
                  imgSrc == hero4 ? "d-none d-lg-block" : "d-block"
                } w-100 h-100 object-fit-cover`}
                alt="hero-image"
              />
            </div>
          ))}
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
