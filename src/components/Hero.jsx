function Hero() {
  return (
    <>
      <section className="hero text-bg-dark-subtle">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center px-1 h-100">
            <div className="col-12 col-md-11 col-lg-10 col-xl-9">
              <h1 className="display-3 fw-bold mb-3 text-center text-white p-3 rounded">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                You'll Find Comfort in every{" "}
                <span className="text-primary fw-bolder">ZAWYA</span> of your
                place
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
