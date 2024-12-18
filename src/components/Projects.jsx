import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const basePath = import.meta.env.DEV ? "/src/" : "/";

const importAllAlbumsObject = {
  album1: import.meta.glob(
    "/src/assets/images/projects/01/*.{jpg,jpeg,png,gif}"
  ),
  album2: import.meta.glob(
    "/src/assets/images/projects/02/*.{jpg,jpeg,png,gif}"
  ),
  album3: import.meta.glob(
    "/src/assets/images/projects/03/*.{jpg,jpeg,png,gif}"
  ),
  album4: import.meta.glob(
    "/src/assets/images/projects/04/*.{jpg,jpeg,png,gif}"
  ),
  album5: import.meta.glob(
    "/src/assets/images/projects/05/*.{jpg,jpeg,png,gif}"
  ),
  album6: import.meta.glob(
    "/src/assets/images/projects/06/*.{jpg,jpeg,png,gif}"
  ),
  album7: import.meta.glob(
    "/src/assets/images/projects/07/*.{jpg,jpeg,png,gif}"
  ),
  album8: import.meta.glob(
    "/src/assets/images/projects/08/*.{jpg,jpeg,png,gif}"
  ),
  album9: import.meta.glob(
    "/src/assets/images/projects/09/*.{jpg,jpeg,png,gif}"
  ),
  album10: import.meta.glob(
    "/src/assets/images/projects/10/*.{jpg,jpeg,png,gif}"
  ),
  album11: import.meta.glob(
    "/src/assets/images/projects/11/*.{jpg,jpeg,png,gif}"
  ),
  album12: import.meta.glob(
    "/src/assets/images/projects/12/*.{jpg,jpeg,png,gif}"
  ),
  album13: import.meta.glob(
    "/src/assets/images/projects/13/*.{jpg,jpeg,png,gif}"
  ),
  album14: import.meta.glob(
    "/src/assets/images/projects/14/*.{jpg,jpeg,png,gif}"
  ),
  // album15: import.meta.glob(
  //   "/src/assets/images/projects/15/*.{jpg,jpeg,png,gif}"
  // ),
};
const importedAlbumsValues = Object.values(importAllAlbumsObject);
const albums = {};
for (let i = 0; i < importedAlbumsValues.length; i++) {
  const album = Object.values(importedAlbumsValues[i]).reduce((prev, curr) => {
    prev.push({ src: basePath + curr.name.slice(5) });
    return prev;
  }, []);
  albums[`album${i + 1}`] = album;
}
const entryPoints = [];
Object.values(albums).forEach((album, index) => {
  const imagesArray = Object.values(album);
  entryPoints.push({
    src: imagesArray[0].src,
    alt: `album ${index + 1}`,
    albumName: `album${index + 1}`,
  });
});
function Projects() {
  const [open, setOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const openAlbum = (album) => {
    setCurrentAlbum(albums[album]);
    setOpen(true);
    setStartIndex(0);
  };

  return (
    <>
      <section className="pt-4 pb-5" id="projects">
        <div className="container">
          <h2 className="fw-bold pb-4">Our Projects</h2>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 991: 3 }}
          >
            {/* animate__fadeInUp  animate__backInUp animate__fadeInUpBig  */}
            <Masonry columnsCount={3} gutter="10px">
              {entryPoints.map((image, i) => (
                <ScrollAnimation
                  animateIn="animate__fadeInUp"
                  delay={150}
                  duration={1}
                  animateOnce={true}
                  key={i}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      display: "block",
                      cursor: "pointer",
                    }}
                    className="project-img"
                    onClick={() => openAlbum(image.albumName)}
                  />
                </ScrollAnimation>
              ))}

              {open && (
                <Lightbox
                  open={open}
                  close={() => setOpen(false)}
                  slides={currentAlbum}
                  index={startIndex}
                  onIndexChange={setStartIndex}
                />
              )}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    </>
  );
}

export default Projects;
