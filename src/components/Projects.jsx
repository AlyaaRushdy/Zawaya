import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
function Projects() {
  const images = [
    "/src/assets/images/projects-slider/1.jpeg",
    "/src/assets/images/projects-slider/2.jpeg",
    "/src/assets/images/projects-slider/3.jpeg",
    "/src/assets/images/projects-slider/4.jpeg",
    "/src/assets/images/projects-slider/5.jpeg",
    "/src/assets/images/projects-slider/6.jpg",
    "/src/assets/images/projects-slider/7.jpg",
  ];
  return (
    <>
      <section className="pt-4 pb-5">
        <div className="container">
          <h2 className="fw-bold pb-4">Our Projects</h2>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry columnsCount={3} gutter="10px">
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  style={{ width: "100%", display: "block" }}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    </>
  );
}

export default Projects;
