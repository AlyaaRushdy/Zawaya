import aboutImage from "/src/assets/images/about.jpg";

function About() {
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
              {/* <img
                src={aboutImage}
                alt="outdoor and exterior"
                className="w-100 p-3 border-gradient"
              /> */}

              <div
                id="about-carousel"
                class="carousel slide carousel-fade border-gradient p-3"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="/src/assets/images/about-1.jpg"
                      class="d-block w-100"
                      alt="hero-image"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="/src/assets/images/about-2.jpg"
                      class="d-block w-100"
                      alt="hero-image"
                    />
                  </div>
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
