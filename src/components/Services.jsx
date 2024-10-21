function Services() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold">Our Services</h2>
          <div className="row row-cols-1 row-cols-md-2 text-center">
            <div className="p-3 service-card">
              <div className="card bg-light border-0 rounded-0">
                <div className="card-body p-4">
                  <i className="fa-solid fa-trowel-bricks fa-2x mb-2 bg-primary text-white rounded-circle p-3"></i>
                  <h5 className="card-title text-primary fw-semibold py-2 my-0">
                    Architecture Design
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum incidunt exercitationem quis eligendi doloribus.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 service-card">
              <div className="card bg-light border-0 rounded-0">
                <div className="card-body p-4">
                  <i className="fa-solid fa-couch fa-2x mb-2 bg-primary text-white rounded-circle p-3"></i>
                  <h5 className="card-title text-primary fw-semibold py-2 my-0">
                    Interior Planning
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum incidunt exercitationem quis eligendi doloribus.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 service-card">
              <div className="card bg-light border-0 rounded-0">
                <div className="card-body p-4">
                  <i className="fa-solid fa-layer-group fa-2x mb-2 bg-primary text-white rounded-circle p-3"></i>
                  <h5 className="card-title text-primary fw-semibold py-2 my-0">
                    3D Modeling
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum incidunt exercitationem quis eligendi doloribus.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 service-card">
              <div className="card bg-light border-0 rounded-0">
                <div className="card-body p-4">
                  <i className="fa-solid fa-helmet-safety fa-2x mb-2 bg-primary text-white rounded-circle p-3"></i>
                  <h5 className="card-title text-primary fw-semibold py-2 my-0">
                    Site Supervision
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cum incidunt exercitationem quis eligendi doloribus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
