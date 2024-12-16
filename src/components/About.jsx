import { useEffect, useRef } from "react";
import aboutImage1 from "/src/assets/images/about/about-1.jpg";
import aboutImage2 from "/src/assets/images/about/about-2.jpg";

const aboutImages = [aboutImage1, aboutImage2];

function About() {
  const aboutCarouselRef = useRef(null);

  useEffect(() => {
    let aboutCarousel;

    if (aboutCarouselRef.current) {
      aboutCarousel = new window.bootstrap.Carousel(aboutCarouselRef.current, {
        interval: 4000,
        pause: false,
        ride: "carousel",
      });
    }

    return () => {
      if (aboutCarousel) {
        aboutCarousel.dispose();
      }
    };
  }, []);

  return (
    <>
      <section className="py-5" id="about">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row">
            <div className="col-12 col-lg-5">
              <h2 className="mb-4 fw-bold">Our Work is Timeless</h2>
              <p className="lh-lg">
                We are a leading company dedicated to creating spaces where
                people live, work, and thrive. Specializing in residential and
                commercial construction, we've honed our craft over the years
                and recently expanded into interior finishing and decoration. We
                take pride in delivering thoughtful, high-quality solutions that
                reflect our clients' vision, ensuring every space feels personal
                and inviting. Your project is our priority, and we're here to
                bring it to life with care and expertise.
              </p>
            </div>
            <div className="col-12 col-lg-6 my-3">
              <div
                id="about-carousel"
                className="carousel slide carousel-fade border-gradient p-3"
                ref={aboutCarouselRef}
              >
                <div className="carousel-inner">
                  {aboutImages.map((imgSrc, i) => (
                    <div
                      className={`carousel-item ${i == 0 ? "active" : ""}`}
                      key={i}
                    >
                      <img
                        src={imgSrc}
                        className="d-block w-100"
                        alt="about-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
