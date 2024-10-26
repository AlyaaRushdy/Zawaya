import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const entryPoint = [
  {
    src: "/src/assets/images/projects/1/main.jpg",
    alt: "Album 1",
    albumName: "album1",
  },

  {
    src: "/src/assets/images/projects/4/main.jpg",
    alt: "Album 4",
    albumName: "album4",
  },
  {
    src: "/src/assets/images/projects/5/main.jpg",
    alt: "Album 5",
    albumName: "album5",
  },
  {
    src: "/src/assets/images/projects/6/main.jpg",
    alt: "Album 6",
    albumName: "album6",
  },
  {
    src: "/src/assets/images/projects/7/main.jpg",
    alt: "Album 7",
    albumName: "album7",
  },
  {
    src: "/src/assets/images/projects/8/main.jpg",
    alt: "Album 8",
    albumName: "album8",
  },
  {
    src: "/src/assets/images/projects/9/main.jpg",
    alt: "Album 9",
    albumName: "album9",
  },
  {
    src: "/src/assets/images/projects/2/main.jpg",
    alt: "Album 2",
    albumName: "album2",
  },

  {
    src: "/src/assets/images/projects/10/main.jpg",
    alt: "Album 10",
    albumName: "album10",
  },
  {
    src: "/src/assets/images/projects/11/main.jpg",
    alt: "Album 11",
    albumName: "album11",
  },
  {
    src: "/src/assets/images/projects/3/main.jpg",
    alt: "Album 3",
    albumName: "album3",
  },
];

const albums = {
  album1: [
    { src: "/src/assets/images/projects/1/main.jpg" },
    { src: "/src/assets/images/projects/1/1.jpg" },
    { src: "/src/assets/images/projects/1/2.jpg" },
    { src: "/src/assets/images/projects/1/3.jpg" },
  ],
  album2: [
    { src: "/src/assets/images/projects/2/main.jpg" },
    { src: "/src/assets/images/projects/2/1.jpg" },
    { src: "/src/assets/images/projects/2/2.jpg" },
    { src: "/src/assets/images/projects/2/3.jpg" },
    { src: "/src/assets/images/projects/2/4.jpg" },
  ],
  album3: [
    { src: "/src/assets/images/projects/3/main.jpg" },
    { src: "/src/assets/images/projects/3/1.jpg" },
    { src: "/src/assets/images/projects/3/2.jpg" },
    { src: "/src/assets/images/projects/3/3.jpg" },
    { src: "/src/assets/images/projects/3/4.jpg" },
    { src: "/src/assets/images/projects/3/5.jpg" },
  ],
  album4: [
    { src: "/src/assets/images/projects/4/main.jpg" },
    { src: "/src/assets/images/projects/4/1.jpg" },
    { src: "/src/assets/images/projects/4/2.jpg" },
    { src: "/src/assets/images/projects/4/3.jpg" },
    { src: "/src/assets/images/projects/4/4.jpg" },
    { src: "/src/assets/images/projects/4/5.jpg" },
    { src: "/src/assets/images/projects/4/6.jpg" },
    { src: "/src/assets/images/projects/4/7.jpg" },
    { src: "/src/assets/images/projects/4/8.jpg" },
    { src: "/src/assets/images/projects/4/9.jpg" },
    { src: "/src/assets/images/projects/4/10.jpg" },
    { src: "/src/assets/images/projects/4/11.jpg" },
    { src: "/src/assets/images/projects/4/12.jpg" },
  ],
  album5: [
    { src: "/src/assets/images/projects/5/main.jpg" },
    { src: "/src/assets/images/projects/5/1.jpg" },
    { src: "/src/assets/images/projects/5/2.jpg" },
    { src: "/src/assets/images/projects/5/3.jpg" },
    { src: "/src/assets/images/projects/5/4.jpg" },
    { src: "/src/assets/images/projects/5/5.jpg" },
  ],
  album6: [
    { src: "/src/assets/images/projects/6/main.jpg" },
    { src: "/src/assets/images/projects/6/1.jpg" },
    { src: "/src/assets/images/projects/6/2.jpg" },
    { src: "/src/assets/images/projects/6/3.jpg" },
    { src: "/src/assets/images/projects/6/4.jpg" },
    { src: "/src/assets/images/projects/6/5.jpg" },
  ],
  album7: [
    { src: "/src/assets/images/projects/7/main.jpg" },
    { src: "/src/assets/images/projects/7/1.jpg" },
    { src: "/src/assets/images/projects/7/2.jpg" },
    { src: "/src/assets/images/projects/7/3.jpg" },
    { src: "/src/assets/images/projects/7/4.jpg" },
    { src: "/src/assets/images/projects/7/5.jpg" },
    { src: "/src/assets/images/projects/7/6.jpg" },
  ],
  album8: [
    { src: "/src/assets/images/projects/8/main.jpg" },
    { src: "/src/assets/images/projects/8/1.jpg" },
    { src: "/src/assets/images/projects/8/2.jpg" },
    { src: "/src/assets/images/projects/8/3.jpg" },
    { src: "/src/assets/images/projects/8/4.jpg" },
    { src: "/src/assets/images/projects/8/5.jpg" },
    { src: "/src/assets/images/projects/8/6.jpg" },
    { src: "/src/assets/images/projects/8/7.jpg" },
    { src: "/src/assets/images/projects/8/8.jpg" },
    { src: "/src/assets/images/projects/8/9.jpg" },
  ],
  album9: [
    { src: "/src/assets/images/projects/9/main.jpg" },
    { src: "/src/assets/images/projects/9/1.jpg" },
    { src: "/src/assets/images/projects/9/2.jpg" },
    { src: "/src/assets/images/projects/9/3.jpg" },
    { src: "/src/assets/images/projects/9/4.jpg" },
    { src: "/src/assets/images/projects/9/5.jpg" },
    { src: "/src/assets/images/projects/9/6.jpg" },
    { src: "/src/assets/images/projects/9/7.jpg" },
    { src: "/src/assets/images/projects/9/8.jpg" },
    { src: "/src/assets/images/projects/9/9.jpg" },
  ],
  album10: [
    { src: "/src/assets/images/projects/10/main.jpg" },
    { src: "/src/assets/images/projects/10/1.jpg" },
    { src: "/src/assets/images/projects/10/2.jpg" },
    { src: "/src/assets/images/projects/10/3.jpg" },
    { src: "/src/assets/images/projects/10/4.jpg" },
    { src: "/src/assets/images/projects/10/5.jpg" },
  ],
  album11: [
    { src: "/src/assets/images/projects/11/main.jpg" },
    { src: "/src/assets/images/projects/11/1.jpg" },
    { src: "/src/assets/images/projects/11/2.jpg" },
    { src: "/src/assets/images/projects/11/3.jpg" },
    { src: "/src/assets/images/projects/11/4.jpg" },
    { src: "/src/assets/images/projects/11/5.jpg" },
    { src: "/src/assets/images/projects/11/6.jpg" },
    { src: "/src/assets/images/projects/11/7.jpg" },
    { src: "/src/assets/images/projects/11/8.jpg" },
    { src: "/src/assets/images/projects/11/9.jpg" },
    { src: "/src/assets/images/projects/11/10.jpg" },
    { src: "/src/assets/images/projects/11/11.jpg" },
  ],
};

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
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry columnsCount={3} gutter="10px">
              {entryPoint.map((image, i) => (
                <img
                  key={i}
                  src={image.src}
                  alt={image.alt}
                  style={{ width: "100%", display: "block", cursor: "pointer" }}
                  onClick={() => openAlbum(image.albumName)}
                />
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
