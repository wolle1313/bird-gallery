import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../components/AppContext";

import "../styles/GalleryPage.css";

const GalleryPage = () => {
  const { data } = useContext(AppContext);

  const [searchState, setSearchState] = useState("");

  let gallery = [];

  if (data) {
    gallery = data.filter((el) => el.name.includes(searchState));
    if (gallery.length) {
      gallery = gallery.map((element) => {
        const { name } = element;
        const imgUrl =
          `url(${process.env.PUBLIC_URL}/images/birds/${name}/pics/1.jpg)`.replace(
            /(\s+)/g,
            "\\$1"
          );

        return (
          <Link key={name} to={`/gallery/${name}`}>
            <div
              style={{
                backgroundImage: imgUrl,
                backgroundColor: "red",
              }}
              className="galleryTab"
            >
              <div>
                <span>{element.name}</span>
                <span>zdjęcia: {element.noPictures}</span>
              </div>
            </div>
          </Link>
        );
      });
    }
  }
  return (
    <div className="galleryWrapper">
      <h1>Gallery</h1>
      <input
        type="text"
        onChange={(e) => setSearchState(e.target.value)}
        value={searchState}
      />
      <div className="gallery">{gallery}</div>
    </div>
  );
};

export default GalleryPage;
