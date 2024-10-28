import { useRef } from "react";
import Slider from "react-slick";

const basePath = import.meta.env.DEV ? "/src/" : "/";
const importedImagesObject = import.meta.glob(
  "/src/assets/images/projects-slider/*.{jpg,jpeg,png,gif}"
);
const images = Object.values(importedImagesObject).reduce((prev, curr) => {
  prev.push(basePath + curr.name.slice(5));
  return prev;
}, []);

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
    centerPadding: 0,
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
          {images.map((src, index) => (
            <img
              src={src}
              className="img-fluid p-3"
              alt="project image"
              key={index}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SampleOfOurWork;
