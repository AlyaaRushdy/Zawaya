import Slider from "react-slick";
import client1 from "../assets/images/clients/clients1.png";
import client2 from "../assets/images/clients/clients2.png";
import client3 from "../assets/images/clients/clients3.png";
import client4 from "../assets/images/clients/clients4.png";
import client5 from "../assets/images/clients/clients5.png";
import client6 from "../assets/images/clients/clients6.webp";

function Clients() {
  const images = [client1, client2, client3, client4, client5, client6];

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
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
          {console.log(images)}
          <Slider {...settings}>
            {images.map((image, i) => (
              <div className="p-3 ">
                <img
                  src={image}
                  className="img-fluid mx-auto"
                  key={i}
                  alt={`client ${i + 1} image`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Clients;
