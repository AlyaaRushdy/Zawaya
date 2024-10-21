import Slider from "react-slick";

function Clients() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: 0,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: 0,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg-body-tertiary">
        <div className="container clients">
          <Slider {...settings}>
            <div className="p-3 mx-auto">
              <img
                src="/src/assets/images/clients/clients1.png"
                className="img-fluid mx-auto"
                alt=""
              />
            </div>

            <div className="p-3 mx-auto">
              <img
                src="/src/assets/images/clients/clients2.png"
                className="img-fluid mx-auto"
                alt=""
              />
            </div>

            {/* <div className="p-3 mx-auto">
              <img
                src="/src/assets/images/clients/clients3.jpg"
                className="img-fluid mx-auto"
                alt=""
              />
            </div> */}

            <div className="p-3 mx-auto">
              <img
                src="/src/assets/images/clients/clients4.webp"
                className="img-fluid mx-auto"
                alt=""
              />
            </div>

            <div className="p-3 mx-auto">
              <img
                src="/src/assets/images/clients/clients5.png"
                className="img-fluid mx-auto"
                alt=""
              />
            </div>

            {/*  <div className="p-3 mx-auto">
              <img
                src="/src/assets/images/clients/client-6.png"
                className="img-fluid mx-auto"
                alt=""
              />
            </div> */}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Clients;
