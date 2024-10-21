import ServiceBlock from "./reusable/serviceBlock";

function Services() {
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <h2 className="fw-bold">Design Services</h2>
          <div className="row row-cols-1 row-cols-md-2 text-center mb-3">
            <ServiceBlock
              faClass={"fa-trowel-bricks"}
              text={"Architecture Design"}
            />
            <ServiceBlock faClass={"fa-hotel"} text={"Structual Design"} />
            <ServiceBlock faClass={"fa-couch"} text={"Interior Planning"} />
            <ServiceBlock
              faClass={"fa-mountain-sun"}
              text={"Outdoor / Exterior Planning"}
            />
          </div>
          <h2 className="fw-bold">Site Works</h2>
          <div className="row row-cols-1 row-cols-md-2 text-center">
            <ServiceBlock faClass={"fa-helmet-safety"} text={"Consultation"} />
            <ServiceBlock faClass={"fa-person-digging"} text={"Contracting"} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
