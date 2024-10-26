import { useRef } from "react";
import Slider from "react-slick";

import imgSrc1 from "../assets/images/projects-slider/1.jpeg";
import imgSrc2 from "../assets/images/projects-slider/2.jpeg";
import imgSrc3 from "../assets/images/projects-slider/3.jpeg";
import imgSrc4 from "../assets/images/projects-slider/4.jpeg";
import imgSrc5 from "../assets/images/projects-slider/5.jpeg";
import imgSrc6 from "../assets/images/projects-slider/6.jpg";

function SampleOfOurWork() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    className: "projects-slider",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: "60px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: 0,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: 0,
        },
      },
    ],
  };
  return (
    <section className="bg-primary py-5" id="ourWork">
      <div className="container">
        <div className="py-4 text-white d-flex flex-wrap ">
          <h2 className="fw-bold">Sample of Our Work</h2>
          <div className="ms-auto">
            <button className="btn text-white me-2 fs-4" onClick={previous}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="btn text-white ms-2 fs-4" onClick={next}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="slider-container pb-3">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {/* <div className="p-3 mx-auto">
            <img src={imgSrc1} className="img-fluid" alt="" />
          </div> */}
          <div className="p-3 mx-auto">
            <img src={imgSrc2} className="img-fluid" alt="" />
          </div>
          <div className="p-3 mx-auto">
            <img src={imgSrc3} className="img-fluid" alt="" />
          </div>
          <div className="p-3 mx-auto">
            <img src={imgSrc4} className="img-fluid" alt="" />
          </div>
          <div className="p-3 mx-auto">
            <img src={imgSrc5} className="img-fluid" alt="" />
          </div>
          {/* <div className="p-3 mx-auto">
            <img src={imgSrc6} className="img-fluid" alt="" />
          </div> */}
        </Slider>
      </div>
    </section>
  );
}

export default SampleOfOurWork;
