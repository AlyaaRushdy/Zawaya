import hero1 from "../assets/images/hero/hero1.jpg";
import hero2 from "../assets/images/hero/hero2.jpg";
import hero3 from "../assets/images/hero/hero3.jpg";

function Hero() {
  return (
    <>
      <section
        id="hero-carousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-pause="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item h-100 active">
            <img
              src={hero1}
              class="d-block w-100 h-100 object-fit-cover"
              alt="hero-image"
            />
            <div class="carousel-caption text-start">
              {/*d-none d-md-block*/}
              <h4>3D Modeling</h4>
            </div>
          </div>
          <div class="carousel-item h-100">
            <img
              src={hero2}
              class="d-block w-100 h-100 object-fit-cover"
              alt="hero-image"
            />
            <div class="carousel-caption text-start">
              {/*d-none d-md-block*/}
              <h4>Exterior</h4>
            </div>
          </div>
          <div class="carousel-item h-100">
            <img
              src={hero3}
              class="d-block w-100 h-100 object-fit-cover"
              alt="hero-image"
            />
            <div class="carousel-caption text-start">
              {/*d-none d-md-block*/}
              <h4>Office Interior Design</h4>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </section>
    </>
  );
}

export default Hero;
